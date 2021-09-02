import { Atom } from 'atoms/atoms';

/**
 * Sets fetched from Scryfall with
 * 
 * ```python
 * import requests
 * 
 * ENDPOINT = 'https://api.scryfall.com/sets'
 * 
 * r = requests.get(ENDPOINT)
 * all_sets = sorted(r.json()['data'], key=lambda set: set['released_at'])
 * 
 * for mtgset in all_sets:
 *     spaces = [' '] * (5 - len(mtgset['code']))
 *     print(f"    '{mtgset['code']}',{''.join(spaces)} // {mtgset['name']}")
 * ```
 */
const SET_CODES = [
    'lea',   // Limited Edition Alpha
    'leb',   // Limited Edition Beta
    '2ed',   // Unlimited Edition
    'cei',   // Intl. CollectorsÆ Edition
    'ced',   // CollectorsÆ Edition
    'arn',   // Arabian Nights
    'atq',   // Antiquities
    '3ed',   // Revised Edition
    'fbb',   // Foreign Black Border
    'leg',   // Legends
    'sum',   // Summer Magic / Edgar
    'pdrc',  // Dragon Con
    'drk',   // The Dark
    'phpr',  // HarperPrism Book Promos
    'fem',   // Fallen Empires
    'pmei',  // Media Inserts
    'plgm',  // DCI Legend Membership
    '4bb',   // Fourth Edition Foreign Black Border
    '4ed',   // Fourth Edition
    'ice',   // Ice Age
    'chr',   // Chronicles
    'ren',   // Renaissance
    'rin',   // Rinascimento
    'hml',   // Homelands
    'ptc',   // Pro Tour Collector Set
    'all',   // Alliances
    'rqs',   // Rivals Quick Start Set
    'parl',  // Arena League 1996
    'pcel',  // Celebration Cards
    'pred',  // Redemption Program
    'mir',   // Mirage
    'mgb',   // Multiverse Gift Box
    'itp',   // Introductory Two-Player Set
    'vis',   // Visions
    '5ed',   // Fifth Edition
    'pmic',  // MicroProse Promos
    'past',  // Astral Cards
    'ppod',  // Portal Demo Game
    'pvan',  // Vanguard Series
    'por',   // Portal
    'wth',   // Weatherlight
    'wc97',  // World Championship Decks 1997
    'ptmp',  // Tempest Promos
    'tmp',   // Tempest
    'jgp',   // Judge Gift Cards 1998
    'psth',  // Stronghold Promos
    'sth',   // Stronghold
    'pexo',  // Exodus Promos
    'exo',   // Exodus
    'p02',   // Portal Second Age
    'tugl',  // Unglued Tokens
    'ugl',   // Unglued
    'wc98',  // World Championship Decks 1998
    'palp',  // Asia Pacific Land Program
    'pusg',  // Urza's Saga Promos
    'usg',   // Urza's Saga
    'ath',   // Anthologies
    'pal99', // Arena League 1999
    'g99',   // Judge Gift Cards 1999
    'pulg',  // Urza's Legacy Promos
    'ulg',   // Urza's Legacy
    '6ed',   // Classic Sixth Edition
    'puds',  // Urza's Destiny Promos
    'uds',   // Urza's Destiny
    'pptk',  // Portal: Three Kingdoms Promos
    's99',   // Starter 1999
    'ptk',   // Portal Three Kingdoms
    'pgru',  // Guru
    'pwor',  // World Championship Promos
    'wc99',  // World Championship Decks 1999
    'pwos',  // Wizards of the Coast Online Store
    'pmmq',  // Mercadian Masques Promos
    'mmq',   // Mercadian Masques
    'brb',   // Battle Royale Box Set
    'psus',  // Junior Super Series
    'pal00', // Arena League 2000
    'fnm',   // Friday Night Magic 2000
    'g00',   // Judge Gift Cards 2000
    'pelp',  // European Land Program
    'pnem',  // Nemesis Promos
    'nem',   // Nemesis
    's00',   // Starter 2000
    'ppcy',  // Prophecy Promos
    'pcy',   // Prophecy
    'wc00',  // World Championship Decks 2000
    'btd',   // Beatdown Box Set
    'pinv',  // Invasion Promos
    'inv',   // Invasion
    'pal01', // Arena League 2001
    'f01',   // Friday Night Magic 2001
    'g01',   // Judge Gift Cards 2001
    'mpr',   // Magic Player Rewards 2001
    'ppls',  // Planeshift Promos
    'pls',   // Planeshift
    '7ed',   // Seventh Edition
    'papc',  // Apocalypse Promos
    'apc',   // Apocalypse
    'psdg',  // Sega Dreamcast Cards
    'wc01',  // World Championship Decks 2001
    'pody',  // Odyssey Promos
    'ody',   // Odyssey
    'dkm',   // Deckmasters
    'pal02', // Arena League 2002
    'f02',   // Friday Night Magic 2002
    'pr2',   // Magic Player Rewards 2002
    'g02',   // Judge Gift Cards 2002
    'ptor',  // Torment Promos
    'tor',   // Torment
    'pjud',  // Judgment Promos
    'jud',   // Judgment
    'prm',   // Magic Online Promos
    'phj',   // Hobby Japan Promos
    'wc02',  // World Championship Decks 2002
    'ons',   // Onslaught
    'pmoa',  // Magic Online Avatars
    'pjjt',  // Japan Junior Tournament
    'pal03', // Arena League 2003
    'ovnt',  // Vintage Championship
    'p03',   // Magic Player Rewards 2003
    'g03',   // Judge Gift Cards 2003
    'f03',   // Friday Night Magic 2003
    'plgn',  // Legions Promos
    'pons',  // Onslaught Promos
    'lgn',   // Legions
    'pscg',  // Scourge Promos
    'scg',   // Scourge
    'p8ed',  // Eighth Edition Promos
    '8ed',   // Eighth Edition
    'wc03',  // World Championship Decks 2003
    'mrd',   // Mirrodin
    'pal04', // Arena League 2004
    'p04',   // Magic Player Rewards 2004
    'g04',   // Judge Gift Cards 2004
    'f04',   // Friday Night Magic 2004
    'dst',   // Darksteel
    'pmrd',  // Mirrodin Promos
    'pdst',  // Darksteel Promos
    'p5dn',  // Fifth Dawn Promos
    '5dn',   // Fifth Dawn
    'wc04',  // World Championship Decks 2004
    'pchk',  // Champions of Kamigawa Promos
    'chk',   // Champions of Kamigawa
    'punh',  // Unhinged Promos
    'unh',   // Unhinged
    'pmps',  // Magic Premiere Shop 2005
    'pal05', // Arena League 2005
    'pjse',  // Junior Series Europe
    'g05',   // Judge Gift Cards 2005
    'p05',   // Magic Player Rewards 2005
    'f05',   // Friday Night Magic 2005
    'pbok',  // Betrayers of Kamigawa Promos
    'bok',   // Betrayers of Kamigawa
    'psok',  // Saviors of Kamigawa Promos
    'sok',   // Saviors of Kamigawa
    'p9ed',  // Ninth Edition Promos
    '9ed',   // Ninth Edition
    'psal',  // Salvat 2005
    'prav',  // Ravnica: City of Guilds Promos
    'rav',   // Ravnica: City of Guilds
    'p2hg',  // Two-Headed Giant Tournament
    'pal06', // Arena League 2006
    'pmps06', // Magic Premiere Shop 2006
    'pjas',  // Junior APAC Series
    'pgtw',  // Gateway 2006
    'g06',   // Judge Gift Cards 2006
    'f06',   // Friday Night Magic 2006
    'p06',   // Magic Player Rewards 2006
    'phuk',  // Hachette UK
    'pgpt',  // Guildpact Promos
    'gpt',   // Guildpact
    'pcmp',  // Champs and States
    'pdis',  // Dissension Promos
    'dis',   // Dissension
    'pcsp',  // Coldsnap Promos
    'cst',   // Coldsnap Theme Decks
    'csp',   // Coldsnap
    'ptsp',  // Time Spiral Promos
    'tsb',   // Time Spiral Timeshifted
    'tsp',   // Time Spiral
    'hho',   // Happy Holidays
    'pres',  // Resale Promos
    'pg07',  // Gateway 2007
    'pmps07', // Magic Premiere Shop 2007
    'g07',   // Judge Gift Cards 2007
    'f07',   // Friday Night Magic 2007
    'p07',   // Magic Player Rewards 2007
    'pplc',  // Planar Chaos Promos
    'plc',   // Planar Chaos
    'ppro',  // Pro Tour Promos
    'pgpx',  // Grand Prix Promos
    'pfut',  // Future Sight Promos
    'fut',   // Future Sight
    '10e',   // Tenth Edition
    'p10e',  // Tenth Edition Promos
    't10e',  // Tenth Edition Tokens
    'psum',  // Summer of Magic
    'me1',   // Masters Edition
    'plrw',  // Lorwyn Promos
    'lrw',   // Lorwyn
    'tlrw',  // Lorwyn Tokens
    'dd1',   // Duel Decks: Elves vs. Goblins
    'tdd1',  // Duel Decks: Elves vs. Goblins Tokens
    'pmps08', // Magic Premiere Shop 2008
    'pg08',  // Gateway 2008
    'p08',   // Magic Player Rewards 2008
    'g08',   // Judge Gift Cards 2008
    'f08',   // Friday Night Magic 2008
    'pmor',  // Morningtide Promos
    'mor',   // Morningtide
    'tmor',  // Morningtide Tokens
    'p15a',  // 15th Anniversary Cards
    'pshm',  // Shadowmoor Promos
    'tshm',  // Shadowmoor Tokens
    'shm',   // Shadowmoor
    'peve',  // Eventide Promos
    'teve',  // Eventide Tokens
    'eve',   // Eventide
    'drb',   // From the Vault: Dragons
    'me2',   // Masters Edition II
    'pwpn',  // Wizards Play Network 2008
    'pala',  // Shards of Alara Promos
    'ala',   // Shards of Alara
    'tala',  // Shards of Alara Tokens
    'dd2',   // Duel Decks: Jace vs. Chandra
    'tdd2',  // Duel Decks: Jace vs. Chandra Tokens
    'pwp09', // Wizards Play Network 2009
    'pdtp',  // Duels of the Planeswalkers 2009 Promos 
    'pmps09', // Magic Premiere Shop 2009
    'g09',   // Judge Gift Cards 2009
    'f09',   // Friday Night Magic 2009
    'p09',   // Magic Player Rewards 2009
    'pbook', // Miscellaneous Book Promos
    'pcon',  // Conflux Promos
    'con',   // Conflux
    'tcon',  // Conflux Tokens
    'purl',  // URL/Convention Promos
    'tddc',  // Duel Decks: Divine vs. Demonic Tokens
    'ddc',   // Duel Decks: Divine vs. Demonic
    'parb',  // Alara Reborn Promos
    'arb',   // Alara Reborn
    'tarb',  // Alara Reborn Tokens
    'pm10',  // Magic 2010 Promos
    'm10',   // Magic 2010
    'tm10',  // Magic 2010 Tokens
    'v09',   // From the Vault: Exiled
    'ohop',  // Planechase Planes
    'hop',   // Planechase
    'phop',  // Promotional Planes
    'me3',   // Masters Edition III
    'pzen',  // Zendikar Promos
    'zen',   // Zendikar
    'tzen',  // Zendikar Tokens
    'tddd',  // Duel Decks: Garruk vs. Liliana Tokens
    'ddd',   // Duel Decks: Garruk vs. Liliana
    'h09',   // Premium Deck Series: Slivers
    'pdp10', // Duels of the Planeswalkers 2010 Promos 
    'pwp10', // Wizards Play Network 2010
    'pmps10', // Magic Premiere Shop 2010
    'f10',   // Friday Night Magic 2010
    'g10',   // Judge Gift Cards 2010
    'p10',   // Magic Player Rewards 2010
    'pwwk',  // Worldwake Promos
    'twwk',  // Worldwake Tokens
    'wwk',   // Worldwake
    'dde',   // Duel Decks: Phyrexia vs. the Coalition
    'tdde',  // Duel Decks: Phyrexia vs. the Coalition Tokens
    'proe',  // Rise of the Eldrazi Promos
    'troe',  // Rise of the Eldrazi Tokens
    'roe',   // Rise of the Eldrazi
    'dpa',   // Duels of the Planeswalkers
    'oarc',  // Archenemy Schemes
    'arc',   // Archenemy
    'parc',  // Promotional Schemes
    'pm11',  // Magic 2011 Promos
    'm11',   // Magic 2011
    'tm11',  // Magic 2011 Tokens
    'v10',   // From the Vault: Relics
    'ddf',   // Duel Decks: Elspeth vs. Tezzeret
    'tddf',  // Duel Decks: Elspeth vs. Tezzeret Tokens
    'psom',  // Scars of Mirrodin Promos
    'tsom',  // Scars of Mirrodin Tokens
    'som',   // Scars of Mirrodin
    'td0',   // Magic Online Theme Decks
    'pd2',   // Premium Deck Series: Fire and Lightning
    'pmps11', // Magic Premiere Shop 2011
    'pdp12', // Duels of the Planeswalkers 2012 Promos 
    'pwp11', // Wizards Play Network 2011
    'olgc',  // Legacy Championship
    'f11',   // Friday Night Magic 2011
    'p11',   // Magic Player Rewards 2011
    'ps11',  // Salvat 2011
    'g11',   // Judge Gift Cards 2011
    'me4',   // Masters Edition IV
    'pmbs',  // Mirrodin Besieged Promos
    'mbs',   // Mirrodin Besieged
    'tmbs',  // Mirrodin Besieged Tokens
    'ddg',   // Duel Decks: Knights vs. Dragons
    'tddg',  // Duel Decks: Knights vs. Dragons Tokens
    'pnph',  // New Phyrexia Promos
    'tnph',  // New Phyrexia Tokens
    'nph',   // New Phyrexia
    'td2',   // Duel Decks: Mirrodin Pure vs. New Phyrexia
    'ocmd',  // Commander 2011 Oversized
    'pcmd',  // Commander 2011 Launch Party
    'cmd',   // Commander 2011
    'pm12',  // Magic 2012 Promos
    'tm12',  // Magic 2012 Tokens
    'm12',   // Magic 2012
    'v11',   // From the Vault: Legends
    'ddh',   // Duel Decks: Ajani vs. Nicol Bolas
    'tddh',  // Duel Decks: Ajani vs. Nicol Bolas Tokens
    'pisd',  // Innistrad Promos
    'isd',   // Innistrad
    'tisd',  // Innistrad Tokens
    'pd3',   // Premium Deck Series: Graveborn
    'pidw',  // IDW Comics 2012
    'pwp12', // Wizards Play Network 2012
    'pdp13', // Duels of the Planeswalkers 2013 Promos 
    'l12',   // League Tokens 2012
    'f12',   // Friday Night Magic 2012
    'j12',   // Judge Gift Cards 2012
    'pdka',  // Dark Ascension Promos
    'dka',   // Dark Ascension
    'tdka',  // Dark Ascension Tokens
    'ddi',   // Duel Decks: Venser vs. Koth
    'tddi',  // Duel Decks: Venser vs. Koth Tokens
    'phel',  // Open the Helvault
    'pavr',  // Avacyn Restored Promos
    'avr',   // Avacyn Restored
    'tavr',  // Avacyn Restored Tokens
    'opc2',  // Planechase 2012 Planes
    'pc2',   // Planechase 2012
    'pm13',  // Magic 2013 Promos
    'm13',   // Magic 2013
    'tm13',  // Magic 2013 Tokens
    'v12',   // From the Vault: Realms
    'tddj',  // Duel Decks: Izzet vs. Golgari Tokens
    'ddj',   // Duel Decks: Izzet vs. Golgari
    'rtr',   // Return to Ravnica
    'prtr',  // Return to Ravnica Promos
    'trtr',  // Return to Ravnica Tokens
    'ocm1',  // Commander's Arsenal Oversized
    'cm1',   // Commander's Arsenal
    'pdp14', // Duels of the Planeswalkers 2014 Promos 
    'pi13',  // IDW Comics 2013
    'l13',   // League Tokens 2013
    'f13',   // Friday Night Magic 2013
    'j13',   // Judge Gift Cards 2013
    'pgtc',  // Gatecrash Promos
    'gtc',   // Gatecrash
    'tgtc',  // Gatecrash Tokens
    'tddk',  // Duel Decks: Sorin vs. Tibalt Tokens
    'ddk',   // Duel Decks: Sorin vs. Tibalt
    'pwcq',  // World Magic Cup Qualifiers
    'pdgm',  // Dragon's Maze Promos
    'dgm',   // Dragon's Maze
    'tdgm',  // Dragon's Maze Tokens
    'mma',   // Modern Masters
    'tmma',  // Modern Masters Tokens
    'pm14',  // Magic 2014 Promos
    'psdc',  // San Diego Comic-Con 2013
    'm14',   // Magic 2014
    'tm14',  // Magic 2014 Tokens
    'v13',   // From the Vault: Twenty
    'ddl',   // Duel Decks: Heroes vs. Monsters
    'tddl',  // Duel Decks: Heroes vs. Monsters Tokens
    'pths',  // Theros Promos
    'thp1',  // Theros Hero's Path
    'tths',  // Theros Tokens
    'ths',   // Theros
    'tfth',  // Face the Hydra
    'oc13',  // Commander 2013 Oversized
    'c13',   // Commander 2013
    'pdp15', // Duels of the Planeswalkers 2015 Promos 
    'pi14',  // IDW Comics 2014
    'l14',   // League Tokens 2014
    'f14',   // Friday Night Magic 2014
    'j14',   // Judge Gift Cards 2014
    'pbng',  // Born of the Gods Promos
    'bng',   // Born of the Gods
    'thp2',  // Born of the Gods Hero's Path
    'tbng',  // Born of the Gods Tokens
    'tbth',  // Battle the Horde
    'ddm',   // Duel Decks: Jace vs. Vraska
    'tddm',  // Duel Decks: Jace vs. Vraska Tokens
    'pjou',  // Journey into Nyx Promos
    'thp3',  // Journey into Nyx Hero's Path
    'jou',   // Journey into Nyx
    'tjou',  // Journey into Nyx Tokens
    'tdag',  // Defeat a God
    'tmd1',  // Modern Event Deck 2014 Tokens
    'md1',   // Modern Event Deck 2014
    'pcns',  // Conspiracy Promos
    'tcns',  // Conspiracy Tokens
    'cns',   // Conspiracy
    'vma',   // Vintage Masters
    'ps14',  // San Diego Comic-Con 2014
    'ppc1',  // M15 Prerelease Challenge
    'pm15',  // Magic 2015 Promos
    'm15',   // Magic 2015
    'tm15',  // Magic 2015 Tokens
    'cp1',   // Magic 2015 Clash Pack
    'v14',   // From the Vault: Annihilation
    'ddn',   // Duel Decks: Speed vs. Cunning
    'pktk',  // Khans of Tarkir Promos
    'ktk',   // Khans of Tarkir
    'tktk',  // Khans of Tarkir Tokens
    'oc14',  // Commander 2014 Oversized
    'tc14',  // Commander 2014 Tokens
    'c14',   // Commander 2014
    'tjvc',  // Duel Decks Anthology: Jace vs. Chandra Tokens
    'tdvd',  // Duel Decks Anthology: Divine vs. Demonic Tokens
    'tgvl',  // Duel Decks Anthology: Garruk vs. Liliana Tokens
    'gvl',   // Duel Decks Anthology: Garruk vs. Liliana
    'tevg',  // Duel Decks Anthology: Elves vs. Goblins Tokens
    'jvc',   // Duel Decks Anthology: Jace vs. Chandra
    'dvd',   // Duel Decks Anthology: Divine vs. Demonic
    'evg',   // Duel Decks Anthology: Elves vs. Goblins
    'l15',   // League Tokens 2015
    'f15',   // Friday Night Magic 2015
    'j15',   // Judge Gift Cards 2015
    'ugin',  // Ugin's Fate
    'pfrf',  // Fate Reforged Promos
    'cp2',   // Fate Reforged Clash Pack
    'frf',   // Fate Reforged
    'tfrf',  // Fate Reforged Tokens
    'ddo',   // Duel Decks: Elspeth vs. Kiora
    'pdtk',  // Dragons of Tarkir Promos
    'tdtk',  // Dragons of Tarkir Tokens
    'dtk',   // Dragons of Tarkir
    'ptkdf', // Tarkir Dragonfury
    'tpr',   // Tempest Remastered
    'tmm2',  // Modern Masters 2015 Tokens
    'mm2',   // Modern Masters 2015
    'ps15',  // San Diego Comic-Con 2015
    'cp3',   // Magic Origins Clash Pack
    'pori',  // Magic Origins Promos
    'tori',  // Magic Origins Tokens
    'ori',   // Magic Origins
    'v15',   // From the Vault: Angels
    'ddp',   // Duel Decks: Zendikar vs. Eldrazi
    'bfz',   // Battle for Zendikar
    'pbfz',  // Battle for Zendikar Promos
    'tbfz',  // Battle for Zendikar Tokens
    'pss1',  // BFZ Standard Series
    'exp',   // Zendikar Expeditions
    'tc15',  // Commander 2015 Tokens
    'c15',   // Commander 2015
    'oc15',  // Commander 2015 Oversized
    'pz1',   // Legendary Cube Prize Pack
    'l16',   // League Tokens 2016
    'j16',   // Judge Gift Cards 2016
    'f16',   // Friday Night Magic 2016
    'togw',  // Oath of the Gatewatch Tokens
    'ogw',   // Oath of the Gatewatch
    'pogw',  // Oath of the Gatewatch Promos
    'ddq',   // Duel Decks: Blessed vs. Cursed
    'psoi',  // Shadows over Innistrad Promos
    'tsoi',  // Shadows over Innistrad Tokens
    'w16',   // Welcome Deck 2016
    'soi',   // Shadows over Innistrad
    'ema',   // Eternal Masters
    'tema',  // Eternal Masters Tokens
    'pemn',  // Eldritch Moon Promos
    'temn',  // Eldritch Moon Tokens
    'emn',   // Eldritch Moon
    'v16',   // From the Vault: Lore
    'tcn2',  // Conspiracy: Take the Crown Tokens
    'cn2',   // Conspiracy: Take the Crown
    'ddr',   // Duel Decks: Nissa vs. Ob Nixilis
    'pkld',  // Kaladesh Promos
    'kld',   // Kaladesh
    'tkld',  // Kaladesh Tokens
    'mps',   // Kaladesh Inventions
    'ps16',  // San Diego Comic-Con 2016
    'oc16',  // Commander 2016 Oversized
    'c16',   // Commander 2016
    'tc16',  // Commander 2016 Tokens
    'pz2',   // Treasure Chest
    'tpca',  // Planechase Anthology Tokens
    'pca',   // Planechase Anthology
    'l17',   // League Tokens 2017
    'f17',   // Friday Night Magic 2017
    'j17',   // Judge Gift Cards 2017
    'paer',  // Aether Revolt Promos
    'taer',  // Aether Revolt Tokens
    'aer',   // Aether Revolt
    'tmm3',  // Modern Masters 2017 Tokens
    'mm3',   // Modern Masters 2017
    'dds',   // Duel Decks: Mind vs. Might
    'tdds',  // Duel Decks: Mind vs. Might Tokens
    'w17',   // Welcome Deck 2017
    'pakh',  // Amonkhet Promos
    'akh',   // Amonkhet
    'takh',  // Amonkhet Tokens
    'mp2',   // Amonkhet Invocations
    'tcma',  // Commander Anthology Tokens
    'cma',   // Commander Anthology
    'oe01',  // Archenemy: Nicol Bolas Schemes
    'e01',   // Archenemy: Nicol Bolas
    'phou',  // Hour of Devastation Promos
    'hou',   // Hour of Devastation
    'thou',  // Hour of Devastation Tokens
    'ps17',  // San Diego Comic-Con 2017
    'oc17',  // Commander 2017 Oversized
    'tc17',  // Commander 2017 Tokens
    'c17',   // Commander 2017
    'te01',  // Archenemy: Nicol Bolas Tokens
    'h17',   // HasCon 2017
    'htr16', // 2016 Heroes of the Realm
    'pxln',  // Ixalan Promos
    'xln',   // Ixalan
    'txln',  // Ixalan Tokens
    'pss2',  // XLN Standard Showdown
    'g17',   // 2017 Gift Pack
    'ddt',   // Duel Decks: Merfolk vs. Goblins
    'tddt',  // Duel Decks: Merfolk vs. Goblins Tokens
    'ima',   // Iconic Masters
    'e02',   // Explorers of Ixalan
    'v17',   // From the Vault: Transform
    'pxtc',  // XLN Treasure Chest
    'tima',  // Iconic Masters Tokens
    'pust',  // Unstable Promos
    'tust',  // Unstable Tokens
    'ust',   // Unstable
    'f18',   // Friday Night Magic 2018
    'j18',   // Judge Gift Cards 2018
    'prix',  // Rivals of Ixalan Promos
    'trix',  // Rivals of Ixalan Tokens
    'rix',   // Rivals of Ixalan
    'pnat',  // Nationals Promos
    'plny',  // 2018 Lunar New Year
    'a25',   // Masters 25
    'ta25',  // Masters 25 Tokens
    'tddu',  // Duel Decks: Elves vs. Inventors Tokens
    'ddu',   // Duel Decks: Elves vs. Inventors
    'pdom',  // Dominaria Promos
    'dom',   // Dominaria
    'tdom',  // Dominaria Tokens
    'pbbd',  // Battlebond Promos
    'tbbd',  // Battlebond Tokens
    'tcm2',  // Commander Anthology Volume II Tokens
    'bbd',   // Battlebond
    'cm2',   // Commander Anthology Volume II
    'ss1',   // Signature Spellbook: Jace
    'gs1',   // Global Series Jiang Yanggu & Mu Yanling
    'pm19',  // Core Set 2019 Promos
    'm19',   // Core Set 2019
    'pss3',  // M19 Standard Showdown
    'tm19',  // Core Set 2019 Tokens
    'xana',  // Arena New Player Experience Extras
    'ana',   // Arena New Player Experience
    'pana',  // MTG Arena Promos
    'oana',  // Arena New Player Experience Cards
    'ps18',  // San Diego Comic-Con 2018
    'htr17', // 2017 Heroes of the Realm
    'oc18',  // Commander 2018 Oversized
    'tc18',  // Commander 2018 Tokens
    'c18',   // Commander 2018
    'tgrn',  // Guilds of Ravnica Tokens
    'pgrn',  // Guilds of Ravnica Promos
    'grn',   // Guilds of Ravnica
    'med',   // Mythic Edition
    'tmed',  // Mythic Edition Tokens
    'tgk1',  // GRN Guild Kit Tokens
    'gk1',   // GRN Guild Kit
    'prwk',  // GRN Ravnica Weekend
    'gnt',   // Game Night
    'g18',   // M19 Gift Pack
    'puma',  // Ultimate Box Topper
    'uma',   // Ultimate Masters
    'tuma',  // Ultimate Masters Tokens
    'opca',  // Planechase Anthology Planes
    'pf19',  // MagicFest 2019
    'prna',  // Ravnica Allegiance Promos
    'trna',  // Ravnica Allegiance Tokens
    'rna',   // Ravnica Allegiance
    'gk2',   // RNA Guild Kit
    'tgk2',  // RNA Guild Kit Tokens
    'prw2',  // RNA Ravnica Weekend
    'j19',   // Judge Gift Cards 2019
    'pwar',  // War of the Spark Promos
    'twar',  // War of the Spark Tokens
    'war',   // War of the Spark
    'tmh1',  // Modern Horizons Tokens
    'amh1',  // Modern Horizons Art Series
    'pmh1',  // Modern Horizons Promos
    'mh1',   // Modern Horizons
    'ss2',   // Signature Spellbook: Gideon
    'tm20',  // Core Set 2020 Tokens
    'pm20',  // Core Set 2020 Promos
    'ppp1',  // M20 Promo Packs
    'm20',   // Core Set 2020
    'ps19',  // San Diego Comic-Con 2019
    'tc19',  // Commander 2019 Tokens
    'htr18', // 2018 Heroes of the Realm
    'c19',   // Commander 2019
    'oc19',  // Commander 2019 Oversized
    'teld',  // Throne of Eldraine Tokens
    'peld',  // Throne of Eldraine Promos
    'eld',   // Throne of Eldraine
    'ptg',   // Ponies: The Galloping
    'cmb1',  // Mystery Booster Playtest Cards 2019
    'mb1',   // Mystery Booster
    'tgn2',  // Game Night 2019 Tokens
    'gn2',   // Game Night 2019
    'ha1',   // Historic Anthology 1
    'sld',   // Secret Lair Drop
    'j20',   // Judge Gift Cards 2020
    'pf20',  // MagicFest 2020
    'pthb',  // Theros Beyond Death Promos
    'tthb',  // Theros Beyond Death Tokens
    'thb',   // Theros Beyond Death
    'tund',  // Unsanctioned Tokens
    'und',   // Unsanctioned
    'fmb1',  // Mystery Booster Retail Edition Foils
    'ha2',   // Historic Anthology 2
    'pc20',  // Commander 2020 Promos
    'oc20',  // Commander 2020 Oversized
    'tc20',  // Commander 2020 Tokens
    'c20',   // Commander 2020
    'piko',  // Ikoria: Lair of Behemoths Promos
    'iko',   // Ikoria: Lair of Behemoths
    'tiko',  // Ikoria: Lair of Behemoths Tokens
    'plg20', // Love Your LGS 2020
    'ha3',   // Historic Anthology 3
    'slu',   // Secret Lair: Ultimate Edition
    'fjmp',  // Jumpstart Front Cards
    'ss3',   // Signature Spellbook: Chandra
    'pm21',  // Core Set 2021 Promos
    'tm21',  // Core Set 2021 Tokens
    'm21',   // Core Set 2021
    'ajmp',  // Jumpstart Arena Exclusives
    'jmp',   // Jumpstart
    'htr19', // 2019 Heroes of the Realm
    '2xm',   // Double Masters
    't2xm',  // Double Masters Tokens
    'akr',   // Amonkhet Remastered
    'anb',   // Arena Beginner Set
    'pznr',  // Zendikar Rising Promos
    'tznc',  // Zendikar Rising Commander Tokens
    'aznr',  // Zendikar Rising Art Series
    'zne',   // Zendikar Rising Expeditions
    'znr',   // Zendikar Rising
    'mznr',  // Zendikar Rising Minigames
    'znc',   // Zendikar Rising Commander
    'sznr',  // Zendikar Rising Substitute Cards
    'tznr',  // Zendikar Rising Tokens
    'plist', // The List
    'klr',   // Kaladesh Remastered
    'cmr',   // Commander Legends
    'tcmr',  // Commander Legends Tokens
    'cc1',   // Commander Collection: Green
    'pj21',  // Judge Gift Cards 2021
    'pl21',  // 2021 Lunar New Year
    'pkhm',  // Kaldheim Promos
    'mkhm',  // Kaldheim Minigames
    'akhm',  // Kaldheim Art Series
    'tkhc',  // Kaldheim Commander Tokens
    'tkhm',  // Kaldheim Tokens
    'khc',   // Kaldheim Commander
    'khm',   // Kaldheim
    'ha4',   // Historic Anthology 4
    'tsr',   // Time Spiral Remastered
    'ttsr',  // Time Spiral Remastered Tokens
    'tstx',  // Strixhaven: School of Mages Tokens
    'tc21',  // Commander 2021 Tokens
    'mstx',  // Strixhaven: School of Mages Minigames
    'stx',   // Strixhaven: School of Mages
    'sta',   // Strixhaven Mystical Archive
    'astx',  // Strixhaven Art Series
    'c21',   // Commander 2021
    'oc21',  // Commander 2021 Display Commanders
    'pstx',  // Strixhaven: School of Mages Promos
    'ha5',   // Historic Anthology 5
    'pmh2',  // Modern Horizons 2 Promos
    'mmh2',  // Modern Horizons 2 Minigames
    'pwp21', // Wizards Play Network 2021
    'h1r',   // Modern Horizons 1 Timeshifts
    'mh2',   // Modern Horizons 2
    'tmh2',  // Modern Horizons 2 Tokens
    'amh2',  // Modern Horizons 2 Art Series
    'plg21', // Love Your LGS 2021
    'pafr',  // Adventures in the Forgotten Realms Promos
    'afc',   // Forgotten Realms Commander
    'aafr',  // Adventures in the Forgotten Realms Art Series
    'tafc',  // Forgotten Realms Commander Tokens
    'tafr',  // Adventures in the Forgotten Realms Tokens
    'mafr',  // Adventures in the Forgotten Realms Minigames
    'afr',   // Adventures in the Forgotten Realms
    'cmb2',  // Mystery Booster Playtest Cards 2021
    'j21',   // Jumpstart: Historic Horizons
    'mid',   // Innistrad: Midnight Hunt
    'vow',   // Innistrad: Crimson Vow
    'cc2',   // Commander Collection: Black
];

/** Atom for searching by set, edition, or block. */
export const SET_ATOM = new Atom(
    ['set', 's', 'edition', 'e', 'block', 'b'],
    [':'],
    SET_CODES,
);

/** Atom for searching specifically for cards in a special type of set. */
export const SET_TYPE_ATOM = new Atom(
    ['st'],
    [':'],
    [
        'boxset',
        'multiplayer',
        'beginner',
        'core',
        'expansion',
        'masters',
        'unset',
        'portal',
        'commander',
        'duel_deck',
        'from_the_vault',
        'premium_deck',
        'fnm',
        'judge_gift',
        'arena_league',
        'player_rewards',
        'media_insert',
        'tourney',
        'gateway',
        'wpn',
        'instore',
        'convention',
        'set_promo',
        'duels',
        'event',
        'premiere_shop',
        'masterpiece',
    ],
)