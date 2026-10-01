function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const eurFormatter = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" });
const usdFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" });

function renderEntry(entry) {
  const isIncome = entry.type === "income";
  const eur = parseFloat(entry.amountEur);
  const usd = parseFloat(entry.amountUsd);
  const sign = isIncome ? "+" : "−";

  const source = entry.sourceUrl
    ? `<div class="ledger-source"><a href="${escapeHtml(entry.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source ↗</a></div>`
    : "";

  return `
    <div class="ledger-row">
      <div class="ledger-date">${dateFormatter.format(new Date(entry.entryDate))}</div>

      <div>
        <div class="ledger-label">${escapeHtml(entry.label)}</div>
        ${entry.description ? `<div class="ledger-desc">${escapeHtml(entry.description)}</div>` : ""}
        <span class="ledger-tag ${isIncome ? "income" : "expense"}">${escapeHtml(entry.category || entry.type)}</span>
        ${source}
      </div>

      <div>
        <div class="ledger-amount ${isIncome ? "income" : "expense"}">${sign} ${eurFormatter.format(eur)}</div>
        <div class="ledger-amount-sub">${usdFormatter.format(usd)}</div>
      </div>
    </div>
  `;
}

async function loadFinances() {
  const summaryRoot = document.getElementById("finance-summary-root");
  const ledgerRoot = document.getElementById("finance-ledger-root");
  if (!summaryRoot || !ledgerRoot) return;

  try {
    const response = await fetch(`${OSTHELIA_API_BASE}/api/finance`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const entries = await response.json();

    if (!Array.isArray(entries) || entries.length === 0) {
      summaryRoot.innerHTML = "";
      ledgerRoot.innerHTML = `<div class="data-state">No entries recorded yet.</div>`;
      return;
    }

    const totals = entries.reduce((acc, entry) => {
      const eur = parseFloat(entry.amountEur) || 0;
      if (entry.type === "income") acc.incomeEur += eur;
      else acc.expenseEur += eur;
      return acc;
    }, { incomeEur: 0, expenseEur: 0 });

    const balanceEur = totals.incomeEur - totals.expenseEur;

    summaryRoot.innerHTML = `
      <div class="finance-stat income reveal in">
        <div class="finance-stat-label">Total income</div>
        <div class="finance-stat-value">${eurFormatter.format(totals.incomeEur)}</div>
      </div>
      <div class="finance-stat expense reveal in reveal-delay-1">
        <div class="finance-stat-label">Total expenses</div>
        <div class="finance-stat-value">${eurFormatter.format(totals.expenseEur)}</div>
      </div>
      <div class="finance-stat balance reveal in reveal-delay-2">
        <div class="finance-stat-label">Balance</div>
        <div class="finance-stat-value">${eurFormatter.format(balanceEur)}</div>
      </div>
    `;

    const sorted = [...entries].sort((a, b) => new Date(b.entryDate) - new Date(a.entryDate));
    ledgerRoot.innerHTML = `<div class="ledger reveal in">${sorted.map(renderEntry).join("")}</div>`;

  } catch (error) {
    summaryRoot.innerHTML = "";
    ledgerRoot.innerHTML = `
      <div class="data-state is-error">
        Couldn't reach the finance ledger right now.
        <br>
        Make sure the API is running at ${escapeHtml(OSTHELIA_API_BASE)}.
      </div>
    `;
  }
}

loadFinances();
