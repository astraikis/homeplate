const gamesDiv = document.getElementById("games");

const divisions = {
    "New York Yankees": "al-e",
    "Baltimore Orioles": "al-e",
    "Boston Red Sox": "al-e",
    "Tampa Bay Rays": "al-e",
    "Toronto Blue Jays": "al-e",

    "Cleveland Guardians": "al-c",
    "Minnesota Twins": "al-c",
    "Kansas City Royals": "al-c",
    "Detroit Tigers": "al-c",
    "Chicago White Sox": "al-c",

    "Seattle Mariners": "al-w",
    "Houston Astros": "al-w",
    "Texas Rangers": "al-w",
    "Los Angeles Angels": "al-w",
    "Oakland Atheltics": "al-w",

    "Philadelphia Phillies": "nl-e",
    "Atlanta Braves": "nl-e",
    "New York Mets": "nl-e",
    "Washington Nationals": "nl-e",
    "Miami Marlins": "nl-e",

    "Milwaukee Brewers": "nl-c",
    "St. Louis Cardinals": "nl-c",
    "Pittsburgh Pirates": "nl-c",
    "Cincinnati Reds": "nl-c",
    "Chicago Cubs": "nl-c",

    "Los Angeles Dodgers": "nl-w",
    "San Diego Padres": "nl-w",
    "Arizona Diamondbacks": "nl-w",
    "San Francisco Giants": "nl-w",
    "Colorado Rockies": "nl-w"
}

const teamLogos = {
    "Arizona Diamondbacks": "https://www.mlbstatic.com/team-logos/team-cap-on-light/109.svg",
    "Atlanta Braves": "https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg",
    "Baltimore Orioles": "https://www.mlbstatic.com/team-logos/team-cap-on-light/110.svg",
    "Boston Red Sox": "https://www.mlbstatic.com/team-logos/team-cap-on-light/111.svg",
    "Chicago Cubs": "https://www.mlbstatic.com/team-logos/team-cap-on-light/112.svg",
    "Chicago White Sox": "https://www.mlbstatic.com/team-logos/team-cap-on-light/145.svg",
    "Cincinnati Reds": "https://www.mlbstatic.com/team-logos/team-cap-on-light/113.svg",
    "Cleveland Guardians": "https://www.mlbstatic.com/team-logos/team-cap-on-light/114.svg",
    "Colorado Rockies": "https://www.mlbstatic.com/team-logos/team-cap-on-light/115.svg",
    "Detroit Tigers": "https://www.mlbstatic.com/team-logos/team-cap-on-light/116.svg",
    "Houston Astros": "https://www.mlbstatic.com/team-logos/team-primary-on-light/117.svg",
    "Kansas City Royals": "https://www.mlbstatic.com/team-logos/team-cap-on-light/118.svg",
    "Los Angeles Angels": "https://www.mlbstatic.com/team-logos/team-cap-on-light/108.svg",
    "Los Angeles Dodgers": "https://www.mlbstatic.com/team-logos/team-cap-on-light/119.svg",
    "Miami Marlins": "https://www.mlbstatic.com/team-logos/team-cap-on-light/146.svg",
    "Milwaukee Brewers": "https://www.mlbstatic.com/team-logos/team-cap-on-light/158.svg",
    "Minnesota Twins": "https://www.mlbstatic.com/team-logos/team-cap-on-light/142.svg",
    "New York Mets": "https://www.mlbstatic.com/team-logos/team-cap-on-light/121.svg",
    "New York Yankees": "https://www.mlbstatic.com/team-logos/team-cap-on-light/147.svg",
    "Oakland Athletics": "https://www.mlbstatic.com/team-logos/team-cap-on-light/133.svg",
    "Philadelphia Phillies": "https://www.mlbstatic.com/team-logos/team-cap-on-light/143.svg",
    "Pittsburgh Pirates": "https://www.mlbstatic.com/team-logos/team-cap-on-light/134.svg",
    "San Diego Padres": "https://www.mlbstatic.com/team-logos/team-cap-on-light/135.svg",
    "San Francisco Giants": "https://www.mlbstatic.com/team-logos/team-cap-on-light/137.svg",
    "Seattle Mariners": "https://www.mlbstatic.com/team-logos/team-primary-on-light/136.svg",
    "St. Louis Cardinals": "https://www.mlbstatic.com/team-logos/team-cap-on-light/138.svg",
    "Tampa Bay Rays": "https://www.mlbstatic.com/team-logos/team-cap-on-light/139.svg",
    "Texas Rangers": "https://www.mlbstatic.com/team-logos/team-cap-on-light/140.svg",
    "Toronto Blue Jays": "https://www.mlbstatic.com/team-logos/team-cap-on-light/141.svg",
    "Washington Nationals": "https://www.mlbstatic.com/team-logos/team-cap-on-light/141.svg"
}

const teamAbbrvs = {
    "Arizona Diamondbacks": "ARI",
    "Atlanta Braves": "ATL",
    "Baltimore Orioles": "BAL",
    "Boston Red Sox": "BOS",
    "Chicago Cubs": "CHC",
    "Chicago White Sox": "CHW",
    "Cincinnati Reds": "CIN",
    "Cleveland Guardians": "CLE",
    "Colorado Rockies": "COL",
    "Detroit Tigers": "DET",
    "Houston Astros": "HOU",
    "Kansas City Royals": "KAN",
    "Los Angeles Angels": "LAA",
    "Los Angeles Dodgers": "LAD",
    "Miami Marlins": "MIA",
    "Milwaukee Brewers": "MIL",
    "Minnesota Twins": "MIN",
    "New York Mets": "NYM",
    "New York Yankees": "NYY",
    "Oakland Athletics": "OAK",
    "Philadelphia Phillies": "PHI",
    "Pittsburgh Pirates": "PIT",
    "San Diego Padres": "SD",
    "San Francisco Giants": "SF",
    "Seattle Mariners": "SEA",
    "St. Louis Cardinals": "STL",
    "Tampa Bay Rays": "TB",
    "Texas Rangers": "TEX",
    "Toronto Blue Jays": "TOR",
    "Washington Nationals": "WAS"
}

const months = 
    ["January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", 
    "November", "December"
    ];

const days =
    ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];

function setDate() {
    let date = new Date();
    document.getElementById("date").innerText = 
        `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function categorizeGames(games) {
    let categories = {
        // High PCT, division game
        "hpct-d": [],
        // High PCT, not division game
        "hpct-nd": [],
        // Mixed PCT, division game
        "mpct-d": [],
        // Mixed PCT, not division game
        "mpct-nd": [],
        // Low PCT, division game
        "lpct-d": [],
        // Low PCT, not division game
        "lpct-nd": []
    };

    for (let i = 0; i < games.length; i++) {
        const away = games[i]["teams"]["away"];
        const home = games[i]["teams"]["home"];

        // Both high PCT
        if (parseFloat(away["leagueRecord"]["pct"]) > 0.5 &&
            parseFloat(home["leagueRecord"]["pct"]) > 0.5) {
            // Division
            if (divisions[away["team"]["name"]] === divisions[home["team"]["name"]]) {
                categories["hpct-d"].push(games[i]);
            } else {
                categories["hpct-nd"].push(games[i]);
            }
        // One high PCT
        } else if (parseFloat(away["leagueRecord"]["pct"]) > 0.5 ||
                   parseFloat(home["leagueRecord"]["pct"]) > 0.5){
            // Division
            if (divisions[away["team"]["name"]] === divisions[home["team"]["name"]]) {
                categories["mpct-d"].push(games[i]);
            } else {
                categories["mpct-nd"].push(games[i]);
            }
        // Low PCT
        } else if (parseFloat(away["leagueRecord"]["pct"]) < 0.5 &&
                   parseFloat(home["leagueRecord"]["pct"]) < 0.5) {
            // Division
            if (divisions[away["team"]["name"]] === divisions[home["team"]["name"]]) {
                categories["lpct-d"].push(games[i]);
            } else {
                categories["lpct-nd"].push(games[i]);
            }
        }
    }

    return categories;
}

function getTooltipHtml(statAbbrv, type) {
    console.log(statAbbrv);
    const summaries = {
        "AVG-h": "Number of hits divided by number of at-bats.",
        "OBP-h": "Number of hits, walks, and hit-by-pitches divided by plate appearances.",
        "SLG-h": "Number of bases a hitter records per at-bat.",
        "OPS-h": "OBP plus SLG. Represents how well a hitter can get on base and hit for power. Gives a good look at their overall hitting.",
        "AVG-p": "Number of hits divided by number of at-bats.",
        "OBP-p": "Number of hits, walks, and hit-by-pitches divided by plate appearances.",
        "SLG-p": "Number of bases a hitter records per at-bat.",
        "OPS-p": "OBP plus SLG. Represents how well a hitter can get on base and hit for power. Gives a good look at their overall hitting.",
        "R-h": "Number of runs.",
        "ERA-p": "Average number of runs allowed per nine innings.",
        "FPCT-f": "Number of putouts and assists divided by the number of chances to make an out.",
        "E-f": "A fielder fails to convert an out that an average fielder should be able to."
    }

    const better = {
        "AVG-h": "Higher",
        "OBP-h": "Higher",
        "SLG-h": "Higher",
        "OPS-h": "Higher",
        "AVG-p": "Lower",
        "OBP-p": "Lower",
        "SLG-p": "Lower",
        "OPS-p": "Lower",
        "R-h": "Higher",
        "ERA-p": "Lower",
        "FPCT-f": "Higher",
        "E-f": "Lower"
    }

    const formulaDiv = document.getElementById(`formulas-${statAbbrv}`);
    let formula;
    if (formulaDiv) {
        formula = formulaDiv.innerHTML;
    } else {
        formula = "";
    }

    const html = 
        `<h4>${statAbbrv}:</h4>
        <p class="stat-tooltip-p">${summaries[`${statAbbrv}-${type}`]}
        <p>${formula}</p>
        <p class="stat-tooltip-p">${better[`${statAbbrv}-${type}`]} is better.`;

    return html
}

function addRow(table, game, statAbbrv, statRequestName, awayStats, homeStats, lower, higher, type) {
    const row = document.createElement("tr");

    const tooltipHtml = getTooltipHtml(statAbbrv, type);

    const statCell = document.createElement("td");
    statCell.className = "stat-label"
    statCell.innerHTML = `${statAbbrv} <div class="stat-tooltip hidden">${tooltipHtml}</div>`;
    statCell.onclick = e => {
        console.log(e.target["childNodes"][1].classList.toggle("hidden"));
    }

    const awayCell = document.createElement("td");
    awayCell.id = `${statAbbrv}-${game}-a`;
    awayCell.className = "stat-row";
    awayCell.innerText = awayStats[statRequestName];

    const homeCell = document.createElement("td");
    homeCell.id = `${statAbbrv}-${game}-h`;
    homeCell.className = "stat-row";
    homeCell.innerText = homeStats[statRequestName];

    row.appendChild(statCell);
    row.appendChild(awayCell);
    row.appendChild(homeCell);
    table.appendChild(row);

    if (awayStats[statRequestName] > homeStats[statRequestName]) {
        awayCell.classList.add(higher);
        homeCell.classList.add(lower);
    } else if (awayStats[statRequestName] < homeStats[statRequestName]) {
        awayCell.classList.add(lower);
        homeCell.classList.add(higher);
    }
}

async function getHitting(teamId) {
    const res = await fetch(`https://statsapi.mlb.com/api/v1/teams/${teamId}/stats?season=2024&stats=season&group=hitting&sportIds=1`);
    const data = await res.json();

    return data["stats"][0]["splits"][0]["stat"];
}

async function getPitching(teamId) {
    const res = await fetch(`https://statsapi.mlb.com/api/v1/teams/${teamId}/stats?season=2024&stats=season&group=pitching&sportIds=1`);
    const data = await res.json();

    return data["stats"][0]["splits"][0]["stat"];
}

async function getFielding(teamId) {
    const res = await fetch(`https://statsapi.mlb.com/api/v1/teams/${teamId}/stats?season=2024&stats=season&group=fielding&sportIds=1`);
    const data = await res.json();

    return data["stats"][0]["splits"][0]["stat"];
}

async function addGame(game) {
    const away = game["teams"]["away"];
    const home = game["teams"]["home"];

    const gameDiv = document.createElement("div");
    gameDiv.className = "game-panel";
    gameDiv.id = game["gamePk"];

    const gameDivLeft = document.createElement("div");
    gameDivLeft.className = "gp-left"

    // Away logo
    const awayLogoDiv = document.createElement("div");
    awayLogoDiv.className = "gp-logo-name";

    const awayLogo = document.createElement("img");
    awayLogo.src = teamLogos[away["team"]["name"]];
    awayLogo.className = "gp-logo";
    awayLogoDiv.appendChild(awayLogo);

    const awayName = document.createElement("h2");
    awayName.innerHTML = `${away["team"]["name"]} <br><span class="record">(${away["leagueRecord"]["wins"]}, ${away["leagueRecord"]["losses"]})</span>`;
    awayLogoDiv.appendChild(awayName);

    gameDivLeft.appendChild(awayLogoDiv);

    // @
    const at  = document.createElement("p");
    at.innerText = "@";
    at.className = "gp-at";
    gameDivLeft.appendChild(at);

    // Home logo
    const homeLogoDiv = document.createElement("div");
    homeLogoDiv.className = "gp-logo-name";

    const homeLogo = document.createElement("img");
    homeLogo.src = teamLogos[home["team"]["name"]];
    homeLogo.className = "gp-logo";
    homeLogoDiv.appendChild(homeLogo);

    const homeName = document.createElement("h2");
    homeName.innerHTML = `${home["team"]["name"]} <br><span class="record">(${home["leagueRecord"]["wins"]}, ${away["leagueRecord"]["losses"]})</span>`;
    homeLogoDiv.appendChild(homeName);

    gameDivLeft.appendChild(homeLogoDiv);
 
    gameDiv.appendChild(gameDivLeft);

    const gameDivRight = document.createElement("div");
    gameDivRight.className = "gp-right";

    // Hitting
    const awayHitting = await getHitting(away["team"]["id"]);
    const homeHitting = await getHitting(home["team"]["id"]);

    const hittingDiv = document.createElement("div");
    hittingDiv.className = "gp-stat";

    const hittingLabel = document.createElement("h3");
    hittingLabel.innerText = "Hitting";
    hittingLabel.className = "mb-1";
    hittingDiv.appendChild(hittingLabel);

    const hittingTable = document.createElement("table");
    hittingTable.className = "stat-table";

    const hittingTeams = document.createElement("tr");
    hittingTeams.className = "stat-table-top";
    hittingTeams.innerHTML = `<td></td><td>${teamAbbrvs[away["team"]["name"]]}</td><td>${teamAbbrvs[home["team"]["name"]]}</td>`;
    hittingTable.appendChild(hittingTeams);

    addRow(hittingTable, game["gamePk"], "AVG", "avg", awayHitting, homeHitting, "worse", "better", "h");
    addRow(hittingTable, game["gamePk"], "OBP", "obp", awayHitting, homeHitting, "worse", "better", "h");
    addRow(hittingTable, game["gamePk"], "SLG", "slg", awayHitting, homeHitting, "worse", "better", "h");
    addRow(hittingTable, game["gamePk"], "OPS", "ops", awayHitting, homeHitting, "worse", "better", "h");
    addRow(hittingTable, game["gamePk"], "R", "runs", awayHitting, homeHitting, "worse", "better", "h");

    hittingDiv.appendChild(hittingTable);
    gameDivRight.appendChild(hittingDiv);

    // Pitching
    const awayPitching = await getPitching(away["team"]["id"]);
    const homePitching = await getPitching(home["team"]["id"]);

    const pitchingDiv = document.createElement("div");
    pitchingDiv.className = "gp-stat";

    const pitchingLabel = document.createElement("h3");
    pitchingLabel.innerText = "Pitching";
    pitchingLabel.className = "mb-1";
    pitchingDiv.appendChild(pitchingLabel);

    const pitchingTable = document.createElement("table");
    pitchingTable.className = "stat-table";

    const pitchingTeams = document.createElement("tr");
    pitchingTeams.className = "stat-table-top";
    pitchingTeams.innerHTML = `<td></td><td>${teamAbbrvs[away["team"]["name"]]}</td><td>${teamAbbrvs[home["team"]["name"]]}</td>`;
    pitchingTable.appendChild(pitchingTeams);

    addRow(pitchingTable, game["gamePk"], "AVG", "avg", awayPitching, homePitching, "better", "worse", "p");
    addRow(pitchingTable, game["gamePk"], "OBP", "obp", awayPitching, homePitching, "better", "worse", "p");
    addRow(pitchingTable, game["gamePk"], "SLG", "slg", awayPitching, homePitching, "better", "worse", "p");
    addRow(pitchingTable, game["gamePk"], "OPS", "ops", awayPitching, homePitching, "better", "worse", "p");
    addRow(pitchingTable, game["gamePk"], "ERA", "era", awayPitching, homePitching, "better", "worse", "p");

    pitchingDiv.appendChild(pitchingTable);
    gameDivRight.appendChild(pitchingDiv);

    // Fielding
    const awayFielding = await getFielding(away["team"]["id"]);
    const homeFielding = await getFielding(home["team"]["id"]);

    const fieldingDiv = document.createElement("div");
    fieldingDiv.className = "gp-stat";

    const fieldingLabel = document.createElement("h3");
    fieldingLabel.innerText = "Fielding";
    fieldingLabel.className = "mb-1";
    fieldingDiv.appendChild(fieldingLabel);

    const fieldingTable = document.createElement("table");
    fieldingTable.className = "stat-table";

    const fieldingTeams = document.createElement("tr");
    fieldingTeams.className = "stat-table-top";
    fieldingTeams.innerHTML = `<td></td><td>${teamAbbrvs[away["team"]["name"]]}</td><td>${teamAbbrvs[home["team"]["name"]]}</td>`;
    fieldingTable.appendChild(fieldingTeams);

    addRow(fieldingTable, game["gamePk"], "FPCT", "fielding", awayFielding, homeFielding, "worse", "better", "f");
    addRow(fieldingTable, game["gamePk"], "E", "errors", awayFielding, homeFielding, "better", "worse", "f");

    fieldingDiv.appendChild(fieldingTable);
    gameDivRight.appendChild(fieldingDiv);

    gameDiv.appendChild(gameDivRight);
    gamesDiv.appendChild(gameDiv);

    // const gameDiv = document.createElement("div");
    // gameDiv.className = "game";
    // gameDiv.id = game["gamePk"];

    // const teamDiv = document.createElement("div");
    // teamDiv.className = "game-teams";
    // gameDiv.appendChild(teamDiv);

    // // Away
    // const awayDiv = document.createElement("div");
    // awayDiv.className = "game-team";

    // const awayLogo = document.createElement("img");
    // awayLogo.className = "logo"
    // awayLogo.src = teamLogos[away["team"]["name"]];
    // awayDiv.appendChild(awayLogo);

    // const awayName = document.createElement("h2")
    // awayName.innerText = away["team"]["name"];
    // awayDiv.appendChild(awayName);

    // const awayRecord = document.createElement("p");
    // awayRecord.className = "record";
    // awayRecord.innerText = `(${away["leagueRecord"]["wins"]}, ${away["leagueRecord"]["losses"]})`;
    // awayDiv.appendChild(awayRecord);

    // teamDiv.appendChild(awayDiv);

    // // @
    // const atDiv = document.createElement("div");
    // atDiv.className = "at-div";
    // atDiv.innerText = "@";
    // teamDiv.appendChild(atDiv);
    
    // // Home    
    // const homeDiv = document.createElement("div");
    // homeDiv.className = "game-team";

    // const homeLogo = document.createElement("img");
    // homeLogo.className = "logo";
    // homeLogo.src = teamLogos[home["team"]["name"]];
    // homeDiv.appendChild(homeLogo);

    // const homeName = document.createElement("h2")
    // homeName.innerText = home["team"]["name"];
    // homeDiv.appendChild(homeName);
    
    // const homeRecord = document.createElement("p");
    // homeRecord.className = "record";
    // homeRecord.innerText = `(${home["leagueRecord"]["wins"]}, ${home["leagueRecord"]["losses"]})`;
    // homeDiv.appendChild(homeRecord);
    // teamDiv.appendChild(homeDiv);

    // // Stats
    // const stats = document.createElement("div");
    // stats.id = "s-" + game["gamePk"];
    // stats.className = "stats hidden";

    // const awayStats = document.createElement("div");
    // awayStats.id = "sa-" + game["gamePk"];
    // awayStats.className = "stats-team"
    // stats.appendChild(awayStats);

    // const homeStats = document.createElement("div");
    // homeStats.id = "sh-" + game["gamePk"];
    // homeStats.className = "stats-team"
    // stats.appendChild(homeStats);

    // // Hitting
    // const awayHittingLabel = document.createElement("h3");
    // awayHittingLabel.innerText = "Hitting";
    // awayStats.appendChild(awayHittingLabel);
    
    // const homeHittingLabel = document.createElement("h3");
    // homeHittingLabel.innerText = "Hitting";
    // homeStats.appendChild(homeHittingLabel);

    // const awayHitting = await getHitting(away["team"]["id"]);
    // const homeHitting = await getHitting(home["team"]["id"]);

    // const awayHittingTable = document.createElement("table");
    // awayHittingTable.className = "stat-table";
    // const homeHittingTable = document.createElement("table");
    // homeHittingTable.className = "stat-table";

    // addRow(awayHittingTable, homeHittingTable, "AVG", "avg", awayHitting, homeHitting, "worse", "better");
    // addRow(awayHittingTable, homeHittingTable, "OBP", "obp", awayHitting, homeHitting, "worse", "better");
    // addRow(awayHittingTable, homeHittingTable, "SLG", "slg", awayHitting, homeHitting, "worse", "better");
    // addRow(awayHittingTable, homeHittingTable, "OPS", "ops", awayHitting, homeHitting, "worse", "better");
    // addRow(awayHittingTable, homeHittingTable, "R", "runs", awayHitting, homeHitting, "worse", "better");
    // addRow(awayHittingTable, homeHittingTable, "HR", "homeRuns", awayHitting, homeHitting, "worse", "better");
    // addRow(awayHittingTable, homeHittingTable, "BB", "baseOnBalls", awayHitting, homeHitting, "worse", "better");
    // addRow(awayHittingTable, homeHittingTable, "RBI", "rbi", awayHitting, homeHitting, "worse", "better");

    // awayStats.appendChild(awayHittingTable);
    // homeStats.appendChild(homeHittingTable);

    // // Pitching
    // const awayPitchingLabel = document.createElement("h3");
    // awayPitchingLabel.innerText = "Pitching";
    // awayStats.appendChild(awayPitchingLabel);

    // const homePitchingLabel = document.createElement("h3");
    // homePitchingLabel.innerText = "Pitching";
    // homeStats.appendChild(homePitchingLabel);

    // const awayPitching = await getPitching(away["team"]["id"]);
    // const homePitching = await getPitching(home["team"]["id"]);

    // const awayPitchingTable = document.createElement("table");
    // awayPitchingTable.className = "stat-table";
    // const homePitchingTable = document.createElement("table");
    // homePitchingTable.className = "stat-table";

    // addRow(awayPitchingTable, homePitchingTable, "AVG", "avg", awayPitching, homePitching, "better", "worse");
    // addRow(awayPitchingTable, homePitchingTable, "OBP", "obp", awayPitching, homePitching, "better", "worse");
    // addRow(awayPitchingTable, homePitchingTable, "SLG", "slg", awayPitching, homePitching, "better", "worse");
    // addRow(awayPitchingTable, homePitchingTable, "OPS", "ops", awayPitching, homePitching, "better", "worse");
    // addRow(awayPitchingTable, homePitchingTable, "ERA", "era", awayPitching, homePitching, "better", "worse");
    // addRow(awayPitchingTable, homePitchingTable, "R", "runs", awayPitching, homePitching, "better", "worse");
    // addRow(awayPitchingTable, homePitchingTable, "HR", "homeRuns", awayPitching, homePitching, "better", "worse");
    // addRow(awayPitchingTable, homePitchingTable, "AVG", "avg", awayPitching, homePitching, "better", "worse");
    // addRow(awayPitchingTable, homePitchingTable, "O", "outs", awayPitching, homePitching, "worse", "better");
    // addRow(awayPitchingTable, homePitchingTable, "SO", "strikeOuts", awayPitching, homePitching, "worse", "better");
    // addRow(awayPitchingTable, homePitchingTable, "SHO", "shutouts", awayPitching, homePitching, "worse", "better");

    // awayStats.appendChild(awayPitchingTable);
    // homeStats.appendChild(homePitchingTable);

    // gameDiv.appendChild(stats);

    // teamDiv.addEventListener("click", e => {
    //     stats.classList.toggle("hidden");
    // });

    // gamesGrid.appendChild(gameDiv);
}

async function setGames() {
    const res = await fetch("https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1");
    const data = await res.json();
    
    document.getElementById("games-today-num").innerText = data["totalGames"] + " games today";

    const games = data["dates"][0]["games"];

    let categories = categorizeGames(games);
    for (const [label, list] of Object.entries(categories)) {
        for (let i = 0; i < list.length; i++) {
            addGame(list[i]);
        }
    }
}

/**
 * Populate page.
 */
function populate() {
    setDate();
    setGames();
}

window.onload = () => {
    populate();
}