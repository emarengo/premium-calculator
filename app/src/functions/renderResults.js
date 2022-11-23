export function renderResults (results) {
    return results.map((result,index) => {
        return ` <div class="query-result">
        <div class="query-result-item">
            <input type="text" id="carrier-${index}" value="${result.carrier}" required disabled>
            <label for="carrier-${index}">Carrier</label>
        </div>
        <div class="query-result-item">
            <input type="text" id="premium-${index}" value="${result.premium}" required disabled>
            <label for="premium-${index}">Premium</label>
        </div> 
        <div class="query-result-item">
            <input type="text" id="annual-${index}" value="${result.premium * 12}" required disabled>
            <label for="annual-${index}">Annual</label>
        </div>
        <div class="query-result-item">
            <input type="text" id="monthly-${index}" value="${result.premium}" required disabled>
            <label for="monthly-${index}">Monthly</label>
        </div>
    </div>
    <hr class="hr-1">
    `
    }).join(" ")
}