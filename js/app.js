const items = {
    Weapons: [
        [
            "minecraft:netherite_sword",
            "Netherite Sword",
            [
                "sharpness",
                "smite",
                "bane_of_arthropods",
                "fire_aspect",
                "knockback",
                "looting",
                "sweeping_edge",
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ],
        [
            "minecraft:diamond_sword",
            "Diamond Sword",
            [
                "sharpness",
                "smite",
                "bane_of_arthropods",
                "fire_aspect",
                "knockback",
                "looting",
                "sweeping_edge",
                "unbreaking",
                "mending",
                "curse_of_vanishing",
            ]
        ],
        [
            "minecraft:netherite_axe",
            "Netherite Axe",
            [
                "sharpness",
                "smite",
                "bane_of_arthropods",
                "efficiency",
                "silk_touch",
                "fortune",
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ],
        [
            "minecraft:netherite_pickaxe",
            "Netherite Pickaxe",
            [
                "efficiency",
                "silk_touch",
                "fortune",
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ],
        [
            "minecraft:netherite_shovel",
            "Netherite Shovel",
            [
                "efficiency",
                "silk_touch",
                "fortune",
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ],
        [
            "minecraft:netherite_hoe",
            "Netherite Hoe",
            [
                "efficiency",
                "silk_touch",
                "fortune",
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ],
        [
            "minecraft:bow",
            "Bow",
            [
                "power",
                "punch",
                "flame",
                "infinity",
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ],
        [
            "minecraft:crossbow",
            "Crossbow",
            [
                "quick_charge",
                "multishot",
                "piercing",
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ],
        [
            "minecraft:trident",
            "Trident",
            [
                "loyalty",
                "impaling",
                "riptide",
                "channeling",
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ],
        [
            "minecraft:mace",
            "Mace",
            [
                "density",
                "breach",
                "wind_burst",
                "fire_aspect",
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ]
    ],

    Armor: [

        [
            "minecraft:netherite_helmet",
            "Netherite Helmet",
            [
                "protection",
                "fire_protection",
                "blast_protection",
                "projectile_protection",
                "respiration",
                "aqua_affinity",
                "thorns",
                "unbreaking",
                "mending",
                "curse_of_binding",
                "curse_of_vanishing"
            ]
        ],

        [
            "minecraft:netherite_chestplate",
            "Netherite Chestplate",
            [
                "protection",
                "fire_protection",
                "blast_protection",
                "projectile_protection",
                "thorns",
                "unbreaking",
                "mending",
                "curse_of_binding",
                "curse_of_vanishing"
            ]
        ],

        [
            "minecraft:netherite_leggings",
            "Netherite Leggings",
            [
                "protection",
                "fire_protection",
                "blast_protection",
                "projectile_protection",
                "swift_sneak",
                "thorns",
                "unbreaking",
                "mending",
                "curse_of_binding",
                "curse_of_vanishing"
            ]
        ],

        [
            "minecraft:netherite_boots",
            "Netherite Boots",
            [
                "protection",
                "fire_protection",
                "blast_protection",
                "projectile_protection",
                "feather_falling",
                "depth_strider",
                "frost_walker",
                "soul_speed",
                "thorns",
                "unbreaking",
                "mending",
                "curse_of_binding",
                "curse_of_vanishing"
            ]
        ],

        [
            "minecraft:elytra",
            "Elytra",
            [
                "unbreaking",
                "mending",
                "curse_of_binding",
                "curse_of_vanishing"
            ]
        ],

        [
            "minecraft:shield",
            "Shield",
            [
                "unbreaking",
                "mending",
                "curse_of_vanishing"
            ]
        ]

    ]

};

let mode = "java";

let selectedItem = "minecraft:netherite_sword";

const versions = {
    java: [
        "Java 1.21.11+",
        "Java 1.21.5 – 1.21.10",
        "Java 1.20.5 – 1.21.4",
        "Java 1.20.4 and older"
    ],

    bedrock: [
        "Bedrock 1.21.x",
        "Bedrock 1.20.x"
    ]
};

let version = versions.java[0];

const itemSelect = document.querySelector("#itemSelect");
const itemMenu = document.querySelector("#itemMenu");

const versionSelect = document.querySelector("#versionSelect");
const versionMenu = document.querySelector("#versionMenu");

const itemOptions = document.querySelector("#itemOptions");
const versionOptions = document.querySelector("#versionOptions");

const enchants = document.querySelector("#enchants");

const itemIcon = document.querySelector("#itemIcon");

const commandOutput = document.querySelector("#command");

const copyButton = document.querySelector("#copy");

const warnings = document.querySelector("#warnings");

const customNameInput = document.querySelector("#customName");

const customEnchantsInput =
    document.querySelector("#customEnchants");

function iconForItem(id) {

    const map = {

        "minecraft:netherite_sword":
            "https://minecraft.wiki/images/Netherite_Sword_JE2_BE2.png",

        "minecraft:diamond_sword":
            "https://minecraft.wiki/images/Diamond_Sword_JE2_BE2.png",

        "minecraft:netherite_axe":
            "https://minecraft.wiki/images/Netherite_Axe_JE2_BE2.png",

        "minecraft:netherite_pickaxe":
            "https://minecraft.wiki/images/Netherite_Pickaxe_JE2_BE2.png",

        "minecraft:netherite_shovel":
            "https://minecraft.wiki/images/Netherite_Shovel_JE2_BE2.png",

        "minecraft:netherite_hoe":
            "https://minecraft.wiki/images/Netherite_Hoe_JE2_BE2.png",

        "minecraft:bow":
            "https://minecraft.wiki/images/Bow_JE2_BE2.png",

        "minecraft:crossbow":
            "https://minecraft.wiki/images/Crossbow_JE2_BE2.png",

        "minecraft:trident":
            "https://minecraft.wiki/images/Trident_JE2_BE2.png",

        "minecraft:mace":
            "https://minecraft.wiki/images/Mace_JE2_BE2.png",

        "minecraft:netherite_helmet":
            "https://minecraft.wiki/images/Netherite_Helmet_JE2_BE2.png",

        "minecraft:netherite_chestplate":
            "https://minecraft.wiki/images/Netherite_Chestplate_JE2_BE2.png",

        "minecraft:netherite_leggings":
            "https://minecraft.wiki/images/Netherite_Leggings_JE2_BE2.png",

        "minecraft:netherite_boots":
            "https://minecraft.wiki/images/Netherite_Boots_JE2_BE2.png",

        "minecraft:elytra":
            "https://minecraft.wiki/images/Elytra_JE2_BE2.png",

        "minecraft:shield":
            "https://minecraft.wiki/images/Shield_JE2_BE2.png"

    };

    return map[id] || "";
}


function updateItemIcon() {

    if (!itemIcon) return;

    const url = iconForItem(selectedItem);

    itemIcon.style.backgroundImage =
        url ? `url("${url}")` : "none";
}

function renderItems(filter = "") {

    itemOptions.innerHTML = "";

    const search =
        filter.toLowerCase().trim();

    for (const [group, list] of Object.entries(items)) {

        const matches = list.filter(item => {

            const id = item[0];
            const name = item[1];

            return (
                `${name} ${id}`
                    .toLowerCase()
                    .includes(search)
            );

        });

        if (!matches.length) continue;

        const groupElement =
            document.createElement("div");

        groupElement.className = "group";

        groupElement.textContent = group;

        itemOptions.appendChild(groupElement);

        matches.forEach(item => {

            const option =
                document.createElement("div");

            option.className = "option";

            option.innerHTML = `
                <span>${item[1]}</span>
                <small>${item[0]}</small>
            `;

            option.addEventListener("click", () => {

                selectedItem = item[0];

                itemSelect.textContent = item[1];

                itemMenu.classList.remove("open");

                updateItemIcon();

                renderEnchants();

            });

            itemOptions.appendChild(option);

        });

    }

}


// ============================================================
// VERSION SELECTOR
// ============================================================

function renderVersions() {

    versionOptions.innerHTML = "";

    versions[mode].forEach(v => {

        const option =
            document.createElement("div");

        option.className = "option";

        option.textContent = v;

        option.addEventListener("click", () => {

            version = v;

            versionSelect.textContent = v;

            versionMenu.classList.remove("open");

        });

        versionOptions.appendChild(option);

    });

    if (!versions[mode].includes(version)) {

        version = versions[mode][0];

        versionSelect.textContent = version;

    }

}

function itemEnchantments() {

    for (const list of Object.values(items)) {

        const found =
            list.find(item => item[0] === selectedItem);

        if (found) {
            return found[2];
        }

    }

    return Object.keys(ENCHANTMENTS);

}
function renderEnchants() {

    enchants.innerHTML = "";

    const allowed = itemEnchantments();

    const query =
        document
            .querySelector("#enchSearch")
            .value
            .toLowerCase()
            .trim();

    allowed
        .filter(id => {

            const enchantment = ENCHANTMENTS[id];

            if (!enchantment) return false;

            return (
                `${enchantment.name} ${id} ${enchantment.description}`
                    .toLowerCase()
                    .includes(query)
            );

        })
        .forEach(id => {

            addEnchant(id);

        });

    updateWarnings();
}

function addEnchant(id) {

    const enchantment = ENCHANTMENTS[id];

    if (!enchantment) return;

    const old =
        document.querySelector(
            `[data-id="${id}"]`
        );

    if (old) return;

    const name = enchantment.name;

    const maxLevel = enchantment.maxLevel;

    const description = enchantment.description;

    const element =
        document.createElement("div");

    element.className = "ench";

    element.dataset.id = id;

    element.innerHTML = `

        <input
            type="checkbox"
            aria-label="Enable ${name}"
        >

        <div>

            <div class="ename">
                ${name}
            </div>

            <div class="desc">
                ${description}
            </div>

        </div>

        <input
            class="level"
            type="number"
            min="1"
            max="255"
            step="1"
            value="${maxLevel}"
            aria-label="${name} level"
        >

    `;

    const checkbox =
        element.querySelector(
            'input[type="checkbox"]'
        );

    const levelInput =
        element.querySelector(".level");

    checkbox.addEventListener("change", () => {

        element.classList.toggle(
            "on",
            checkbox.checked
        );

        updateWarnings();

    });

    levelInput.addEventListener("change", () => {

        let level =
            Math.floor(
                Number(levelInput.value) || 1
            );

        level =
            Math.max(
                1,
                Math.min(255, level)
            );

        levelInput.value = level;

        updateWarnings();

    });

    enchants.appendChild(element);
}

function selectedEnchantments() {

    return [
        ...enchants.querySelectorAll(".ench.on")
    ].map(element => {

        const levelInput =
            element.querySelector(".level");

        let level =
            Math.floor(
                Number(levelInput.value) || 1
            );

        level =
            Math.max(
                1,
                Math.min(255, level)
            );

        levelInput.value = level;

        return {
            id: element.dataset.id,
            lvl: level
        };

    });

}

function updateWarnings() {

    const selected =
        selectedEnchantments();

    const ids =
        selected.map(enchantment => enchantment.id);

    const warningMessages = [];


    // Protection family

    const protectionTypes = [
        "protection",
        "fire_protection",
        "blast_protection",
        "projectile_protection"
    ];

    if (
        protectionTypes.filter(
            id => ids.includes(id)
        ).length > 1
    ) {

        warningMessages.push(
            "Protection, Fire Protection, Blast Protection, and Projectile Protection are normally mutually exclusive."
        );

    }


    // Sword damage family

    const damageTypes = [
        "sharpness",
        "smite",
        "bane_of_arthropods"
    ];

    if (
        damageTypes.filter(
            id => ids.includes(id)
        ).length > 1
    ) {

        warningMessages.push(
            "Sharpness, Smite, and Bane of Arthropods are normally mutually exclusive."
        );

    }


    // Fortune / Silk Touch

    if (
        ids.includes("fortune") &&
        ids.includes("silk_touch")
    ) {

        warningMessages.push(
            "Fortune and Silk Touch are normally mutually exclusive."
        );

    }


    // Depth Strider / Frost Walker

    if (
        ids.includes("depth_strider") &&
        ids.includes("frost_walker")
    ) {

        warningMessages.push(
            "Depth Strider and Frost Walker are normally mutually exclusive."
        );

    }


    // Riptide

    if (
        ids.includes("riptide") &&
        (
            ids.includes("loyalty") ||
            ids.includes("channeling")
        )
    ) {

        warningMessages.push(
            "Riptide normally conflicts with Loyalty and Channeling."
        );

    }


    // Infinity / Mending

    if (
        ids.includes("infinity") &&
        ids.includes("mending")
    ) {

        warningMessages.push(
            "Infinity and Mending are normally mutually exclusive."
        );

    }


    warnings.innerHTML =
        warningMessages
            .map(message => `
                <div class="warning">
                    ${message}
                </div>
            `)
            .join("");

}

function escapeText(text) {

    return text
        .replaceAll("\\", "\\\\")
        .replaceAll('"', '\\"')
        .replaceAll("'", "\\'");

}

function generate() {

    const enchantments =
        selectedEnchantments();

    const customEnchantments =
        customEnchantsInput.value
            .split(",")
            .map(id => id.trim())
            .filter(Boolean)
            .map(id =>
                id.replace(/^minecraft:/, "")
            );


    customEnchantments.forEach(id => {

        if (
            !enchantments.some(
                enchantment =>
                    enchantment.id === id
            )
        ) {

            enchantments.push({
                id,
                lvl: 1
            });

        }

    });

    const name =
        customNameInput.value.trim();

    if (mode === "java") {

        const components = [];


        // Enchantments are OPTIONAL now.

        if (enchantments.length > 0) {

            const levels =
                enchantments
                    .map(
                        enchantment =>
                            `minecraft:${enchantment.id}=${enchantment.lvl}`
                    )
                    .join(",");

            components.push(
                `enchantments={${levels}}`
            );

        }


        // Custom name is also OPTIONAL.

        if (name) {

            components.push(
                `custom_name='{"text":"${escapeText(name)}"}'`
            );

        }


        // No components at all

        if (components.length === 0) {

            commandOutput.textContent =
                `/give @p ${selectedItem}`;

        }

        // One or more components

        else {

            commandOutput.textContent =
                `/give @p ${selectedItem}[${components.join(",")}]`;

        }

    }

    else {

        const commands = [];


        // Give the item first.

        commands.push(
            `/give @p ${selectedItem} 1`
        );


        // Apply enchantments only if requested.

        enchantments.forEach(enchantment => {

            commands.push(
                `/enchant @p ${enchantment.id} ${enchantment.lvl}`
            );

        });


        if (name) {

            commands.push(
                `# Rename this item to "${name}" using an anvil.`
            );

        }


        commandOutput.textContent =
            commands.join("\n");

    }


    commandOutput.style.display =
        "block";

    copyButton.style.display =
        "block";

}

copyButton.addEventListener(
    "click",
    async () => {

        try {

            await navigator.clipboard.writeText(
                commandOutput.textContent
            );

            copyButton.textContent =
                "Copied!";

            setTimeout(() => {

                copyButton.textContent =
                    "Copy Command";

            }, 1000);

        }

        catch (error) {

            console.error(
                "Could not copy command:",
                error
            );

        }

    }
);


document
    .querySelector("#itemSearch")
    .addEventListener(
        "input",
        event => {

            renderItems(
                event.target.value
            );

        }
    );



document
    .querySelector("#enchSearch")
    .addEventListener(
        "input",
        renderEnchants
    );

document
    .querySelector("#selectAll")
    .addEventListener(
        "click",
        () => {

            enchants
                .querySelectorAll(".ench")
                .forEach(element => {

                    element.classList.add("on");

                    element.querySelector(
                        'input[type="checkbox"]'
                    ).checked = true;

                });

            updateWarnings();

        }
    );

document
    .querySelector("#clearAll")
    .addEventListener(
        "click",
        () => {

            enchants
                .querySelectorAll(".ench")
                .forEach(element => {

                    element.classList.remove("on");

                    element.querySelector(
                        'input[type="checkbox"]'
                    ).checked = false;

                });

            updateWarnings();

        }
    );

document
    .querySelector("#generate")
    .addEventListener(
        "click",
        generate
    );

itemSelect.addEventListener(
    "click",
    () => {

        itemMenu.classList.toggle(
            "open"
        );

    }
);

versionSelect.addEventListener(
    "click",
    () => {

        versionMenu.classList.toggle(
            "open"
        );

    }
);

document
    .querySelectorAll(".mode button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".mode button")
                    .forEach(other => {

                        other.classList.remove(
                            "active"
                        );

                    });

                button.classList.add(
                    "active"
                );

                mode =
                    button.dataset.mode;

                renderVersions();

            }
        );

    });

document.addEventListener(
    "click",
    event => {

        const itemField =
            document.querySelector("#itemField");

        const versionField =
            document.querySelector("#versionField");


        if (
            !itemField.contains(event.target)
        ) {

            itemMenu.classList.remove(
                "open"
            );

        }


        if (
            !versionField.contains(event.target)
        ) {

            versionMenu.classList.remove(
                "open"
            );

        }

    }
);

renderItems();

renderVersions();

updateItemIcon();

renderEnchants();