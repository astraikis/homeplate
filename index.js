const gamesGrid = document.getElementById("games-grid");

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
        `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
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

async function getHitting(teamId) {
    const res = await fetch(`https://statsapi.mlb.com/api/v1/teams/${teamId}/stats?season=2024&stats=season&group=hitting&sportIds=1`);
    const data = await res.json();

    return data["stats"][0]["splits"][0]["stat"];
}

async function addGame(game) {
    const away = game["teams"]["away"];
    const home = game["teams"]["home"];

    const gameDiv = document.createElement("div");
    gameDiv.className = "game";
    gameDiv.id = game["gamePk"];

    const teamDiv = document.createElement("div");
    teamDiv.className = "game-teams";
    gameDiv.appendChild(teamDiv);

    // Away
    const awayDiv = document.createElement("div");
    awayDiv.className = "game-team";

    const awayLogo = document.createElement("img");
    awayLogo.className = "logo"
    awayLogo.src = teamLogos[away["team"]["name"]];
    awayDiv.appendChild(awayLogo);

    const awayName = document.createElement("h3")
    awayName.innerText = away["team"]["name"];
    awayDiv.appendChild(awayName);

    const awayRecord = document.createElement("p");
    awayRecord.className = "record";
    awayRecord.innerText = `(${away["leagueRecord"]["wins"]}, ${away["leagueRecord"]["losses"]})`;
    awayDiv.appendChild(awayRecord);

    teamDiv.appendChild(awayDiv);

    // At
    const atDiv = document.createElement("div");
    atDiv.className = "at-div";
    atDiv.innerText = "@";
    teamDiv.appendChild(atDiv);
    
    // Home    
    const homeDiv = document.createElement("div");
    homeDiv.className = "game-team";

    const homeLogo = document.createElement("img");
    homeLogo.className = "logo";
    homeLogo.src = teamLogos[home["team"]["name"]];
    homeDiv.appendChild(homeLogo);

    const homeName = document.createElement("h3")
    homeName.innerText = home["team"]["name"];
    homeDiv.appendChild(homeName);
    
    const homeRecord = document.createElement("p");
    homeRecord.className = "record";
    homeRecord.innerText = `(${home["leagueRecord"]["wins"]}, ${home["leagueRecord"]["losses"]})`;
    homeDiv.appendChild(homeRecord);
    teamDiv.appendChild(homeDiv);

    // Stats
    const stats = document.createElement("div");
    stats.id = "s-" + game["gamePk"];
    stats.className = "stats hidden";

    const awayStats = document.createElement("div");
    awayStats.id = "sa-" + game["gamePk"];
    awayStats.className = "stats-team"
    stats.appendChild(awayStats);

    const homeStats = document.createElement("div");
    homeStats.id = "sh-" + game["gamePk"];
    homeStats.className = "stats-team"
    stats.appendChild(homeStats);

    const awayHittingLabel = document.createElement("h4");
    awayHittingLabel.innerText = "Hitting";
    awayStats.appendChild(awayHittingLabel);
    
    const homeHittingLabel = document.createElement("h4");
    homeHittingLabel.innerText = "Hitting";
    homeStats.appendChild(homeHittingLabel);

    const awayHitting = await getHitting(away["team"]["id"]);
    const homeHitting = await getHitting(home["team"]["id"]);

    // Away hitting table
    const awayHittingTable = document.createElement("table");
    awayHittingTable.className = "stat-table"

    const awayAVGRow = document.createElement("tr");
    awayAVGRow.innerHTML = `<th>AVG</th><td class="stat-row">${awayHitting["avg"]}</td>`;
    awayHittingTable.appendChild(awayAVGRow);

    const awayOBPRow = document.createElement("tr");
    awayOBPRow.innerHTML = `<th>OBP</th><td class="stat-row">${awayHitting["obp"]}</td>`;
    awayHittingTable.appendChild(awayOBPRow);

    const awaySLGRow = document.createElement("tr");
    awaySLGRow.innerHTML = `<th>SLG</th><td class="stat-row">${awayHitting["slg"]}</td>`;
    awayHittingTable.appendChild(awaySLGRow);

    const awayHRow = document.createElement("tr");
    awayHRow.innerHTML = `<th>H</th><td class="stat-row">${awayHitting["hits"]}</td>`;
    awayHittingTable.appendChild(awayHRow);

    const awayHRRow = document.createElement("tr");
    awayHRRow.innerHTML = `<th>HR</th><td class="stat-row">${awayHitting["homeRuns"]}</td>`;
    awayHittingTable.appendChild(awayHRRow);

    awayStats.appendChild(awayHittingTable);

    // Home hitting table
    const homeHittingTable = document.createElement("table");
    homeHittingTable.className = "stat-table"

    const homeAVGRow = document.createElement("tr");
    homeAVGRow.innerHTML = `<th>AVG</th><td class="stat-row">${homeHitting["avg"]}</td>`;
    homeHittingTable.appendChild(homeAVGRow);

    const homeOBPRow = document.createElement("tr");
    homeOBPRow.innerHTML = `<th>OBP</th><td class="stat-row">${homeHitting["obp"]}</td>`;
    homeHittingTable.appendChild(homeOBPRow);

    const homeSLGRow = document.createElement("tr");
    homeSLGRow.innerHTML = `<th>SLG</th><td class="stat-row">${homeHitting["slg"]}</td>`;
    homeHittingTable.appendChild(homeSLGRow);

    const homeHRow = document.createElement("tr");
    homeHRow.innerHTML = `<th>H</th><td class="stat-row">${homeHitting["hits"]}</td>`;
    homeHittingTable.appendChild(homeHRow);

    const homeHRRow = document.createElement("tr");
    homeHRRow.innerHTML = `<th>HR</th><td class="stat-row">${homeHitting["homeRuns"]}</td>`;
    homeHittingTable.appendChild(homeHRRow);

    homeStats.appendChild(homeHittingTable);

    // Better/worse
    if (awayHitting["avg"] > homeHitting["avg"]) {
        awayAVGRow.className = "better";
        homeAVGRow.className = "worse";
    } else if (awayHitting["avg"] < homeHitting["avg"]) {
        awayAVGRow.className = "worse";
        homeAVGRow.className = "better";
    }

    if (awayHitting["obp"] > homeHitting["obp"]) {
        awayOBPRow.className = "better";
        homeOBPRow.className = "worse";
    } else if (awayHitting["obp"] < homeHitting["obp"]) {
        awayOBPRow.className = "worse";
        homeOBPRow.className = "better";
    }

    if (awayHitting["slg"] > homeHitting["slg"]) {
        awaySLGRow.className = "better";
        homeSLGRow.className = "worse";
    } else if (awayHitting["slg"] < homeHitting["slg"]) {
        awaySLGRow.className = "worse";
        homeSLGRow.className = "better";
    }

    if (awayHitting["hits"] > homeHitting["hits"]) {
        awayHRow.className = "better";
        homeHRow.className = "worse";
    } else if (awayHitting["hits"] < homeHitting["hits"]) {
        awayHRow.className = "worse";
        homeHRow.className = "better";
    }

    if (awayHitting["homeRuns"] > homeHitting["homeRuns"]) {
        awayHRRow.className = "better";
        homeHRRow.className = "worse";
    } else if (awayHitting["homeRuns"] < homeHitting["homeRuns"]) {
        awayHRRow.className = "worse";
        homeHRRow.className = "better";
    }
    
    gameDiv.appendChild(stats);

    teamDiv.addEventListener("click", e => {
        stats.classList.toggle("hidden");
    });

    gamesGrid.appendChild(gameDiv);
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