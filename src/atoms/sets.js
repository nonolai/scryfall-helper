import { Atom } from 'atoms/atoms';

export const SET_CODES = [
    // START_SECTION SET_ATOM_VALUES
    'lea',   // Limited Edition Alpha
    'leb',   // Limited Edition Beta
    '2ed',   // Unlimited Edition
    'ced',   // Collectors� Edition
    'cei',   // Intl. Collectors� Edition
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
    'plgm',  // DCI Legend Membership
    'pmei',  // Media Inserts
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
    'past',  // Astral Cards
    'pmic',  // MicroProse Promos
    'por',   // Portal
    'ppod',  // Portal Demo Game
    'pvan',  // Vanguard Series
    'wth',   // Weatherlight
    'wc97',  // World Championship Decks 1997
    'ptmp',  // Tempest Promos
    'tmp',   // Tempest
    'jgp',   // Judge Gift Cards 1998
    'psth',  // Stronghold Promos
    'sth',   // Stronghold
    'exo',   // Exodus
    'pexo',  // Exodus Promos
    'p02',   // Portal Second Age
    'tugl',  // Unglued Tokens
    'ugl',   // Unglued
    'wc98',  // World Championship Decks 1998
    'palp',  // Asia Pacific Land Program
    'pusg',  // Urza's Saga Promos
    'usg',   // Urza's Saga
    'ath',   // Anthologies
    'g99',   // Judge Gift Cards 1999
    'pal99', // Arena League 1999
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
    'mmq',   // Mercadian Masques
    'pmmq',  // Mercadian Masques Promos
    'brb',   // Battle Royale Box Set
    'psus',  // Junior Super Series
    'fnm',   // Friday Night Magic 2000
    'g00',   // Judge Gift Cards 2000
    'pal00', // Arena League 2000
    'pelp',  // European Land Program
    'nem',   // Nemesis
    'pnem',  // Nemesis Promos
    's00',   // Starter 2000
    'pcy',   // Prophecy
    'ppcy',  // Prophecy Promos
    'wc00',  // World Championship Decks 2000
    'btd',   // Beatdown Box Set
    'inv',   // Invasion
    'pinv',  // Invasion Promos
    'f01',   // Friday Night Magic 2001
    'g01',   // Judge Gift Cards 2001
    'mpr',   // Magic Player Rewards 2001
    'pal01', // Arena League 2001
    'pls',   // Planeshift
    'ppls',  // Planeshift Promos
    '7ed',   // Seventh Edition
    'apc',   // Apocalypse
    'papc',  // Apocalypse Promos
    'psdg',  // Sega Dreamcast Cards
    'wc01',  // World Championship Decks 2001
    'ody',   // Odyssey
    'pody',  // Odyssey Promos
    'dkm',   // Deckmasters
    'f02',   // Friday Night Magic 2002
    'g02',   // Judge Gift Cards 2002
    'pal02', // Arena League 2002
    'pr2',   // Magic Player Rewards 2002
    'ptor',  // Torment Promos
    'tor',   // Torment
    'jud',   // Judgment
    'pjud',  // Judgment Promos
    'prm',   // Magic Online Promos
    'phj',   // Hobby Japan Promos
    'wc02',  // World Championship Decks 2002
    'ons',   // Onslaught
    'f03',   // Friday Night Magic 2003
    'g03',   // Judge Gift Cards 2003
    'ovnt',  // Vintage Championship
    'p03',   // Magic Player Rewards 2003
    'pal03', // Arena League 2003
    'pjjt',  // Japan Junior Tournament
    'pmoa',  // Magic Online Avatars
    'lgn',   // Legions
    'plgn',  // Legions Promos
    'pons',  // Onslaught Promos
    'pscg',  // Scourge Promos
    'scg',   // Scourge
    '8ed',   // Eighth Edition
    'p8ed',  // Eighth Edition Promos
    'wc03',  // World Championship Decks 2003
    'mrd',   // Mirrodin
    'f04',   // Friday Night Magic 2004
    'g04',   // Judge Gift Cards 2004
    'p04',   // Magic Player Rewards 2004
    'pal04', // Arena League 2004
    'dst',   // Darksteel
    '5dn',   // Fifth Dawn
    'p5dn',  // Fifth Dawn Promos
    'pdst',  // Darksteel Promos
    'pmrd',  // Mirrodin Promos
    'wc04',  // World Championship Decks 2004
    'chk',   // Champions of Kamigawa
    'pchk',  // Champions of Kamigawa Promos
    'punh',  // Unhinged Promos
    'unh',   // Unhinged
    'f05',   // Friday Night Magic 2005
    'g05',   // Judge Gift Cards 2005
    'p05',   // Magic Player Rewards 2005
    'pal05', // Arena League 2005
    'pjse',  // Junior Series Europe
    'pmps',  // Magic Premiere Shop 2005
    'bok',   // Betrayers of Kamigawa
    'pbok',  // Betrayers of Kamigawa Promos
    'psok',  // Saviors of Kamigawa Promos
    'sok',   // Saviors of Kamigawa
    '9ed',   // Ninth Edition
    'p9ed',  // Ninth Edition Promos
    'psal',  // Salvat 2005
    'prav',  // Ravnica: City of Guilds Promos
    'rav',   // Ravnica: City of Guilds
    'p2hg',  // Two-Headed Giant Tournament
    'f06',   // Friday Night Magic 2006
    'g06',   // Judge Gift Cards 2006
    'p06',   // Magic Player Rewards 2006
    'pal06', // Arena League 2006
    'pgtw',  // Gateway 2006
    'phuk',  // Hachette UK
    'pjas',  // Junior APAC Series
    'pmps06', // Magic Premiere Shop 2006
    'gpt',   // Guildpact
    'pgpt',  // Guildpact Promos
    'pcmp',  // Champs and States
    'dis',   // Dissension
    'pdis',  // Dissension Promos
    'csp',   // Coldsnap
    'cst',   // Coldsnap Theme Decks
    'pcsp',  // Coldsnap Promos
    'ptsp',  // Time Spiral Promos
    'tsb',   // Time Spiral Timeshifted
    'tsp',   // Time Spiral
    'hho',   // Happy Holidays
    'f07',   // Friday Night Magic 2007
    'g07',   // Judge Gift Cards 2007
    'p07',   // Magic Player Rewards 2007
    'pg07',  // Gateway 2007
    'pmps07', // Magic Premiere Shop 2007
    'pres',  // Resale Promos
    'plc',   // Planar Chaos
    'pplc',  // Planar Chaos Promos
    'ppro',  // Pro Tour Promos
    'pgpx',  // Grand Prix Promos
    'fut',   // Future Sight
    'pfut',  // Future Sight Promos
    '10e',   // Tenth Edition
    'p10e',  // Tenth Edition Promos
    't10e',  // Tenth Edition Tokens
    'psum',  // Summer of Magic
    'me1',   // Masters Edition
    'lrw',   // Lorwyn
    'plrw',  // Lorwyn Promos
    'tlrw',  // Lorwyn Tokens
    'dd1',   // Duel Decks: Elves vs. Goblins
    'tdd1',  // Duel Decks: Elves vs. Goblins Tokens
    'f08',   // Friday Night Magic 2008
    'g08',   // Judge Gift Cards 2008
    'p08',   // Magic Player Rewards 2008
    'pg08',  // Gateway 2008
    'pmps08', // Magic Premiere Shop 2008
    'mor',   // Morningtide
    'pmor',  // Morningtide Promos
    'tmor',  // Morningtide Tokens
    'p15a',  // 15th Anniversary Cards
    'pshm',  // Shadowmoor Promos
    'shm',   // Shadowmoor
    'tshm',  // Shadowmoor Tokens
    'eve',   // Eventide
    'peve',  // Eventide Promos
    'teve',  // Eventide Tokens
    'drb',   // From the Vault: Dragons
    'me2',   // Masters Edition II
    'pwpn',  // Wizards Play Network 2008
    'ala',   // Shards of Alara
    'pala',  // Shards of Alara Promos
    'tala',  // Shards of Alara Tokens
    'dd2',   // Duel Decks: Jace vs. Chandra
    'tdd2',  // Duel Decks: Jace vs. Chandra Tokens
    'f09',   // Friday Night Magic 2009
    'g09',   // Judge Gift Cards 2009
    'p09',   // Magic Player Rewards 2009
    'pdtp',  // Duels of the Planeswalkers 2009 Promos 
    'pmps09', // Magic Premiere Shop 2009
    'pw09',  // Wizards Play Network 2009
    'pbook', // Miscellaneous Book Promos
    'con',   // Conflux
    'pcon',  // Conflux Promos
    'tcon',  // Conflux Tokens
    'purl',  // URL/Convention Promos
    'ddc',   // Duel Decks: Divine vs. Demonic
    'tddc',  // Duel Decks: Divine vs. Demonic Tokens
    'arb',   // Alara Reborn
    'parb',  // Alara Reborn Promos
    'tarb',  // Alara Reborn Tokens
    'pm10',  // Magic 2010 Promos
    'm10',   // Magic 2010
    'tm10',  // Magic 2010 Tokens
    'v09',   // From the Vault: Exiled
    'hop',   // Planechase
    'ohop',  // Planechase Planes
    'phop',  // Promotional Planes
    'me3',   // Masters Edition III
    'pzen',  // Zendikar Promos
    'tzen',  // Zendikar Tokens
    'zen',   // Zendikar
    'ddd',   // Duel Decks: Garruk vs. Liliana
    'tddd',  // Duel Decks: Garruk vs. Liliana Tokens
    'h09',   // Premium Deck Series: Slivers
    'f10',   // Friday Night Magic 2010
    'g10',   // Judge Gift Cards 2010
    'p10',   // Magic Player Rewards 2010
    'pdp10', // Duels of the Planeswalkers 2010 Promos 
    'pmps10', // Magic Premiere Shop 2010
    'pw10',  // Wizards Play Network 2010
    'pwwk',  // Worldwake Promos
    'twwk',  // Worldwake Tokens
    'wwk',   // Worldwake
    'dde',   // Duel Decks: Phyrexia vs. the Coalition
    'tdde',  // Duel Decks: Phyrexia vs. the Coalition Tokens
    'proe',  // Rise of the Eldrazi Promos
    'roe',   // Rise of the Eldrazi
    'troe',  // Rise of the Eldrazi Tokens
    'dpa',   // Duels of the Planeswalkers
    'arc',   // Archenemy
    'oarc',  // Archenemy Schemes
    'parc',  // Promotional Schemes
    'pm11',  // Magic 2011 Promos
    'm11',   // Magic 2011
    'tm11',  // Magic 2011 Tokens
    'v10',   // From the Vault: Relics
    'ddf',   // Duel Decks: Elspeth vs. Tezzeret
    'tddf',  // Duel Decks: Elspeth vs. Tezzeret Tokens
    'psom',  // Scars of Mirrodin Promos
    'som',   // Scars of Mirrodin
    'tsom',  // Scars of Mirrodin Tokens
    'td0',   // Magic Online Theme Decks
    'pd2',   // Premium Deck Series: Fire and Lightning
    'f11',   // Friday Night Magic 2011
    'g11',   // Judge Gift Cards 2011
    'olgc',  // Legacy Championship
    'p11',   // Magic Player Rewards 2011
    'pdp12', // Duels of the Planeswalkers 2012 Promos 
    'pmps11', // Magic Premiere Shop 2011
    'ps11',  // Salvat 2011
    'pw11',  // Wizards Play Network 2011
    'me4',   // Masters Edition IV
    'pmbs',  // Mirrodin Besieged Promos
    'mbs',   // Mirrodin Besieged
    'tmbs',  // Mirrodin Besieged Tokens
    'ddg',   // Duel Decks: Knights vs. Dragons
    'tddg',  // Duel Decks: Knights vs. Dragons Tokens
    'pnph',  // New Phyrexia Promos
    'nph',   // New Phyrexia
    'tnph',  // New Phyrexia Tokens
    'td2',   // Duel Decks: Mirrodin Pure vs. New Phyrexia
    'cmd',   // Commander 2011
    'ocmd',  // Commander 2011 Oversized
    'pcmd',  // Commander 2011 Launch Party
    'pm12',  // Magic 2012 Promos
    'm12',   // Magic 2012
    'tm12',  // Magic 2012 Tokens
    'v11',   // From the Vault: Legends
    'ddh',   // Duel Decks: Ajani vs. Nicol Bolas
    'tddh',  // Duel Decks: Ajani vs. Nicol Bolas Tokens
    'pisd',  // Innistrad Promos
    'isd',   // Innistrad
    'tisd',  // Innistrad Tokens
    'pd3',   // Premium Deck Series: Graveborn
    'f12',   // Friday Night Magic 2012
    'j12',   // Judge Gift Cards 2012
    'l12',   // League Tokens 2012
    'pdp13', // Duels of the Planeswalkers 2013 Promos 
    'pidw',  // IDW Comics 2012
    'pw12',  // Wizards Play Network 2012
    'pdka',  // Dark Ascension Promos
    'dka',   // Dark Ascension
    'tdka',  // Dark Ascension Tokens
    'ddi',   // Duel Decks: Venser vs. Koth
    'tddi',  // Duel Decks: Venser vs. Koth Tokens
    'pavr',  // Avacyn Restored Promos
    'phel',  // Open the Helvault
    'avr',   // Avacyn Restored
    'tavr',  // Avacyn Restored Tokens
    'opc2',  // Planechase 2012 Planes
    'pc2',   // Planechase 2012
    'pm13',  // Magic 2013 Promos
    'm13',   // Magic 2013
    'tm13',  // Magic 2013 Tokens
    'v12',   // From the Vault: Realms
    'ddj',   // Duel Decks: Izzet vs. Golgari
    'tddj',  // Duel Decks: Izzet vs. Golgari Tokens
    'prtr',  // Return to Ravnica Promos
    'rtr',   // Return to Ravnica
    'trtr',  // Return to Ravnica Tokens
    'cm1',   // Commander's Arsenal
    'ocm1',  // Commander's Arsenal Oversized
    'f13',   // Friday Night Magic 2013
    'j13',   // Judge Gift Cards 2013
    'l13',   // League Tokens 2013
    'pdp14', // Duels of the Planeswalkers 2014 Promos 
    'pi13',  // IDW Comics 2013
    'pgtc',  // Gatecrash Promos
    'gtc',   // Gatecrash
    'tgtc',  // Gatecrash Tokens
    'ddk',   // Duel Decks: Sorin vs. Tibalt
    'tddk',  // Duel Decks: Sorin vs. Tibalt Tokens
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
    'ths',   // Theros
    'tths',  // Theros Tokens
    'tfth',  // Face the Hydra
    'c13',   // Commander 2013
    'oc13',  // Commander 2013 Oversized
    'f14',   // Friday Night Magic 2014
    'j14',   // Judge Gift Cards 2014
    'l14',   // League Tokens 2014
    'pdp15', // Duels of the Planeswalkers 2015 Promos 
    'pi14',  // IDW Comics 2014
    'pbng',  // Born of the Gods Promos
    'bng',   // Born of the Gods
    'tbng',  // Born of the Gods Tokens
    'thp2',  // Born of the Gods Hero's Path
    'tbth',  // Battle the Horde
    'ddm',   // Duel Decks: Jace vs. Vraska
    'tddm',  // Duel Decks: Jace vs. Vraska Tokens
    'pjou',  // Journey into Nyx Promos
    'jou',   // Journey into Nyx
    'thp3',  // Journey into Nyx Hero's Path
    'tjou',  // Journey into Nyx Tokens
    'tdag',  // Defeat a God
    'md1',   // Modern Event Deck 2014
    'tmd1',  // Modern Event Deck 2014 Tokens
    'cns',   // Conspiracy
    'pcns',  // Conspiracy Promos
    'tcns',  // Conspiracy Tokens
    'vma',   // Vintage Masters
    'ps14',  // San Diego Comic-Con 2014
    'ppc1',  // M15 Prerelease Challenge
    'pm15',  // Magic 2015 Promos
    'cp1',   // Magic 2015 Clash Pack
    'm15',   // Magic 2015
    'tm15',  // Magic 2015 Tokens
    'v14',   // From the Vault: Annihilation
    'ddn',   // Duel Decks: Speed vs. Cunning
    'ktk',   // Khans of Tarkir
    'pktk',  // Khans of Tarkir Promos
    'tktk',  // Khans of Tarkir Tokens
    'c14',   // Commander 2014
    'oc14',  // Commander 2014 Oversized
    'tc14',  // Commander 2014 Tokens
    'dvd',   // Duel Decks Anthology: Divine vs. Demonic
    'evg',   // Duel Decks Anthology: Elves vs. Goblins
    'gvl',   // Duel Decks Anthology: Garruk vs. Liliana
    'jvc',   // Duel Decks Anthology: Jace vs. Chandra
    'tdvd',  // Duel Decks Anthology: Divine vs. Demonic Tokens
    'tevg',  // Duel Decks Anthology: Elves vs. Goblins Tokens
    'tgvl',  // Duel Decks Anthology: Garruk vs. Liliana Tokens
    'tjvc',  // Duel Decks Anthology: Jace vs. Chandra Tokens
    'f15',   // Friday Night Magic 2015
    'j15',   // Judge Gift Cards 2015
    'l15',   // League Tokens 2015
    'ugin',  // Ugin's Fate
    'cp2',   // Fate Reforged Clash Pack
    'frf',   // Fate Reforged
    'pfrf',  // Fate Reforged Promos
    'tfrf',  // Fate Reforged Tokens
    'ddo',   // Duel Decks: Elspeth vs. Kiora
    'dtk',   // Dragons of Tarkir
    'pdtk',  // Dragons of Tarkir Promos
    'tdtk',  // Dragons of Tarkir Tokens
    'ptkdf', // Tarkir Dragonfury
    'tpr',   // Tempest Remastered
    'mm2',   // Modern Masters 2015
    'tmm2',  // Modern Masters 2015 Tokens
    'ps15',  // San Diego Comic-Con 2015
    'cp3',   // Magic Origins Clash Pack
    'ori',   // Magic Origins
    'pori',  // Magic Origins Promos
    'tori',  // Magic Origins Tokens
    'v15',   // From the Vault: Angels
    'ddp',   // Duel Decks: Zendikar vs. Eldrazi
    'bfz',   // Battle for Zendikar
    'exp',   // Zendikar Expeditions
    'pbfz',  // Battle for Zendikar Promos
    'pss1',  // BFZ Standard Series
    'tbfz',  // Battle for Zendikar Tokens
    'c15',   // Commander 2015
    'oc15',  // Commander 2015 Oversized
    'tc15',  // Commander 2015 Tokens
    'pz1',   // Legendary Cube Prize Pack
    'f16',   // Friday Night Magic 2016
    'j16',   // Judge Gift Cards 2016
    'l16',   // League Tokens 2016
    'ogw',   // Oath of the Gatewatch
    'pogw',  // Oath of the Gatewatch Promos
    'togw',  // Oath of the Gatewatch Tokens
    'ddq',   // Duel Decks: Blessed vs. Cursed
    'psoi',  // Shadows over Innistrad Promos
    'soi',   // Shadows over Innistrad
    'tsoi',  // Shadows over Innistrad Tokens
    'w16',   // Welcome Deck 2016
    'ema',   // Eternal Masters
    'tema',  // Eternal Masters Tokens
    'emn',   // Eldritch Moon
    'pemn',  // Eldritch Moon Promos
    'temn',  // Eldritch Moon Tokens
    'v16',   // From the Vault: Lore
    'cn2',   // Conspiracy: Take the Crown
    'tcn2',  // Conspiracy: Take the Crown Tokens
    'ddr',   // Duel Decks: Nissa vs. Ob Nixilis
    'kld',   // Kaladesh
    'mps',   // Kaladesh Inventions
    'pkld',  // Kaladesh Promos
    'tkld',  // Kaladesh Tokens
    'ps16',  // San Diego Comic-Con 2016
    'c16',   // Commander 2016
    'oc16',  // Commander 2016 Oversized
    'tc16',  // Commander 2016 Tokens
    'pz2',   // Treasure Chest
    'pca',   // Planechase Anthology
    'tpca',  // Planechase Anthology Tokens
    'f17',   // Friday Night Magic 2017
    'j17',   // Judge Gift Cards 2017
    'l17',   // League Tokens 2017
    'aer',   // Aether Revolt
    'paer',  // Aether Revolt Promos
    'taer',  // Aether Revolt Tokens
    'mm3',   // Modern Masters 2017
    'tmm3',  // Modern Masters 2017 Tokens
    'dds',   // Duel Decks: Mind vs. Might
    'tdds',  // Duel Decks: Mind vs. Might Tokens
    'w17',   // Welcome Deck 2017
    'akh',   // Amonkhet
    'mp2',   // Amonkhet Invocations
    'pakh',  // Amonkhet Promos
    'takh',  // Amonkhet Tokens
    'cma',   // Commander Anthology
    'tcma',  // Commander Anthology Tokens
    'e01',   // Archenemy: Nicol Bolas
    'oe01',  // Archenemy: Nicol Bolas Schemes
    'hou',   // Hour of Devastation
    'phou',  // Hour of Devastation Promos
    'thou',  // Hour of Devastation Tokens
    'ps17',  // San Diego Comic-Con 2017
    'c17',   // Commander 2017
    'oc17',  // Commander 2017 Oversized
    'tc17',  // Commander 2017 Tokens
    'te01',  // Archenemy: Nicol Bolas Tokens
    'h17',   // HasCon 2017
    'htr16', // 2016 Heroes of the Realm
    'pss2',  // XLN Standard Showdown
    'pxln',  // Ixalan Promos
    'txln',  // Ixalan Tokens
    'xln',   // Ixalan
    'g17',   // 2017 Gift Pack
    'ddt',   // Duel Decks: Merfolk vs. Goblins
    'tddt',  // Duel Decks: Merfolk vs. Goblins Tokens
    'ima',   // Iconic Masters
    'e02',   // Explorers of Ixalan
    'pxtc',  // XLN Treasure Chest
    'v17',   // From the Vault: Transform
    'tima',  // Iconic Masters Tokens
    'pust',  // Unstable Promos
    'tust',  // Unstable Tokens
    'ust',   // Unstable
    'f18',   // Friday Night Magic 2018
    'j18',   // Judge Gift Cards 2018
    'prix',  // Rivals of Ixalan Promos
    'rix',   // Rivals of Ixalan
    'trix',  // Rivals of Ixalan Tokens
    'pnat',  // Nationals Promos
    'plny',  // Lunar New Year 2018 
    'a25',   // Masters 25
    'ta25',  // Masters 25 Tokens
    'ddu',   // Duel Decks: Elves vs. Inventors
    'tddu',  // Duel Decks: Elves vs. Inventors Tokens
    'dom',   // Dominaria
    'pdom',  // Dominaria Promos
    'tdom',  // Dominaria Tokens
    'bbd',   // Battlebond
    'cm2',   // Commander Anthology Volume II
    'pbbd',  // Battlebond Promos
    'tbbd',  // Battlebond Tokens
    'tcm2',  // Commander Anthology Volume II Tokens
    'ss1',   // Signature Spellbook: Jace
    'gs1',   // Global Series Jiang Yanggu & Mu Yanling
    'm19',   // Core Set 2019
    'pm19',  // Core Set 2019 Promos
    'pss3',  // M19 Standard Showdown
    'tm19',  // Core Set 2019 Tokens
    'ana',   // Arena New Player Experience
    'oana',  // Arena New Player Experience Cards
    'pana',  // MTG Arena Promos
    'xana',  // Arena New Player Experience Extras
    'ps18',  // San Diego Comic-Con 2018
    'htr17', // 2017 Heroes of the Realm
    'c18',   // Commander 2018
    'oc18',  // Commander 2018 Oversized
    'tc18',  // Commander 2018 Tokens
    'grn',   // Guilds of Ravnica
    'med',   // Mythic Edition
    'pgrn',  // Guilds of Ravnica Promos
    'tgrn',  // Guilds of Ravnica Tokens
    'tmed',  // Mythic Edition Tokens
    'gk1',   // GRN Guild Kit
    'tgk1',  // GRN Guild Kit Tokens
    'prwk',  // GRN Ravnica Weekend
    'g18',   // M19 Gift Pack
    'gnt',   // Game Night
    'puma',  // Ultimate Box Topper
    'tuma',  // Ultimate Masters Tokens
    'uma',   // Ultimate Masters
    'opca',  // Planechase Anthology Planes
    'pf19',  // MagicFest 2019
    'prna',  // Ravnica Allegiance Promos
    'rna',   // Ravnica Allegiance
    'trna',  // Ravnica Allegiance Tokens
    'gk2',   // RNA Guild Kit
    'tgk2',  // RNA Guild Kit Tokens
    'prw2',  // RNA Ravnica Weekend
    'j19',   // Judge Gift Cards 2019
    'pwar',  // War of the Spark Promos
    'twar',  // War of the Spark Tokens
    'war',   // War of the Spark
    'tmh1',  // Modern Horizons Tokens
    'amh1',  // Modern Horizons Art Series
    'mh1',   // Modern Horizons
    'pmh1',  // Modern Horizons Promos
    'ss2',   // Signature Spellbook: Gideon
    'm20',   // Core Set 2020
    'pm20',  // Core Set 2020 Promos
    'ppp1',  // M20 Promo Packs
    'tm20',  // Core Set 2020 Tokens
    'ps19',  // San Diego Comic-Con 2019
    'htr18', // 2018 Heroes of the Realm
    'tc19',  // Commander 2019 Tokens
    'c19',   // Commander 2019
    'oc19',  // Commander 2019 Oversized
    'teld',  // Throne of Eldraine Tokens
    'eld',   // Throne of Eldraine
    'peld',  // Throne of Eldraine Promos
    'ptg',   // Ponies: The Galloping
    'cmb1',  // Mystery Booster Playtest Cards 2019
    'mb1',   // Mystery Booster
    'gn2',   // Game Night 2019
    'tgn2',  // Game Night 2019 Tokens
    'ha1',   // Historic Anthology 1
    'sld',   // Secret Lair Drop
    'j20',   // Judge Gift Cards 2020
    'pf20',  // MagicFest 2020
    'pthb',  // Theros Beyond Death Promos
    'thb',   // Theros Beyond Death
    'tthb',  // Theros Beyond Death Tokens
    'tund',  // Unsanctioned Tokens
    'und',   // Unsanctioned
    'fmb1',  // Mystery Booster Retail Edition Foils
    'ha2',   // Historic Anthology 2
    'c20',   // Commander 2020
    'oc20',  // Commander 2020 Oversized
    'tc20',  // Commander 2020 Tokens
    'iko',   // Ikoria: Lair of Behemoths
    'piko',  // Ikoria: Lair of Behemoths Promos
    'tiko',  // Ikoria: Lair of Behemoths Tokens
    'plg20', // Love Your LGS 2020
    'ha3',   // Historic Anthology 3
    'slu',   // Secret Lair: Ultimate Edition
    'fjmp',  // Jumpstart Front Cards
    'ss3',   // Signature Spellbook: Chandra
    'm21',   // Core Set 2021
    'pm21',  // Core Set 2021 Promos
    'tm21',  // Core Set 2021 Tokens
    'ajmp',  // Jumpstart Arena Exclusives
    'jmp',   // Jumpstart
    'htr19', // 2019 Heroes of the Realm
    '2xm',   // Double Masters
    't2xm',  // Double Masters Tokens
    'akr',   // Amonkhet Remastered
    'anb',   // Arena Beginner Set
    'aznr',  // Zendikar Rising Art Series
    'mznr',  // Zendikar Rising Minigames
    'pznr',  // Zendikar Rising Promos
    'sznr',  // Zendikar Rising Substitute Cards
    'tznc',  // Zendikar Rising Commander Tokens
    'tznr',  // Zendikar Rising Tokens
    'znc',   // Zendikar Rising Commander
    'zne',   // Zendikar Rising Expeditions
    'znr',   // Zendikar Rising
    'plist', // The List
    'klr',   // Kaladesh Remastered
    'cmr',   // Commander Legends
    'tcmr',  // Commander Legends Tokens
    'cc1',   // Commander Collection: Green
    'pf21',  // MagicFest 2021
    'pj21',  // Judge Gift Cards 2021
    'pl21',  // Year of the Ox 2021
    'akhm',  // Kaldheim Art Series
    'khc',   // Kaldheim Commander
    'khm',   // Kaldheim
    'mkhm',  // Kaldheim Minigames
    'pkhm',  // Kaldheim Promos
    'skhm',  // Kaldheim Substitute Cards
    'tkhc',  // Kaldheim Commander Tokens
    'tkhm',  // Kaldheim Tokens
    'ha4',   // Historic Anthology 4
    'tsr',   // Time Spiral Remastered
    'ttsr',  // Time Spiral Remastered Tokens
    'astx',  // Strixhaven Art Series
    'c21',   // Commander 2021
    'mstx',  // Strixhaven: School of Mages Minigames
    'oc21',  // Commander 2021 Display Commanders
    'pstx',  // Strixhaven: School of Mages Promos
    'sstx',  // Strixhaven: School of Mages Substitute Cards
    'sta',   // Strixhaven Mystical Archive
    'stx',   // Strixhaven: School of Mages
    'tc21',  // Commander 2021 Tokens
    'tstx',  // Strixhaven: School of Mages Tokens
    'ha5',   // Historic Anthology 5
    'amh2',  // Modern Horizons 2 Art Series
    'h1r',   // Modern Horizons 1 Timeshifts
    'mh2',   // Modern Horizons 2
    'mmh2',  // Modern Horizons 2 Minigames
    'pmh2',  // Modern Horizons 2 Promos
    'pw21',  // Wizards Play Network 2021
    'tmh2',  // Modern Horizons 2 Tokens
    'plg21', // Love Your LGS 2021
    'aafr',  // Adventures in the Forgotten Realms Art Series
    'afc',   // Forgotten Realms Commander
    'afr',   // Adventures in the Forgotten Realms
    'mafr',  // Adventures in the Forgotten Realms Minigames
    'oafc',  // Forgotten Realms Commander Display Commanders
    'pafr',  // Adventures in the Forgotten Realms Promos
    'tafc',  // Forgotten Realms Commander Tokens
    'tafr',  // Adventures in the Forgotten Realms Tokens
    'htr20', // 2020 Heroes of the Realm
    'cmb2',  // Mystery Booster Playtest Cards 2021
    'j21',   // Jumpstart: Historic Horizons
    'amid',  // Midnight Hunt Art Series
    'mic',   // Midnight Hunt Commander
    'mid',   // Innistrad: Midnight Hunt
    'omic',  // Midnight Hunt Commander Display Commanders
    'pmid',  // Innistrad: Midnight Hunt Promos
    'smid',  // Innistrad: Midnight Hunt Substitute Cards
    'tmic',  // Midnight Hunt Commander Tokens
    'tmid',  // Innistrad: Midnight Hunt Tokens
    'q06',   // Pioneer Challenger Decks 2021
    'avow',  // Crimson Vow Art Series
    'mvow',  // Innistrad: Crimson Vow Minigames
    'ovoc',  // Crimson Vow Commander Display Commanders
    'pvow',  // Innistrad: Crimson Vow Promos
    'svow',  // Innistrad: Crimson Vow Substitute Cards
    'tvoc',  // Crimson Vow Commander Tokens
    'tvow',  // Innistrad: Crimson Vow Tokens
    'voc',   // Crimson Vow Commander
    'vow',   // Innistrad: Crimson Vow
    'ymid',  // Alchemy: Innistrad
    'p22',   // Judge Gift Cards 2022
    'cc2',   // Commander Collection: Black
    'dbl',   // Innistrad: Double Feature
    'aneo',  // Neon Dynasty Art Series
    'nec',   // Neon Dynasty Commander
    'neo',   // Kamigawa: Neon Dynasty
    'pneo',  // Kamigawa: Neon Dynasty Promos
    'tnec',  // Neon Dynasty Commander Tokens
    'tneo',  // Kamigawa: Neon Dynasty Tokens
    'pl22',  // Year of the Tiger 2022
    'slx',   // Universes Within
    'pw22',  // Wizards Play Network 2022
    'yneo',  // Alchemy: Kamigawa
    'gdy',   // Game Day Promos
    'pncc',  // New Capenna Commander Promos
    'tncc',  // New Capenna Commander Tokens
    'phed',  // Heads I Win, Tails You Lose
    'asnc',  // New Capenna Art Series
    'ncc',   // New Capenna Commander
    'snc',   // Streets of New Capenna
    'tsnc',  // Streets of New Capenna Tokens
    'psnc',  // Streets of New Capenna Promos
    'clb',   // Commander Legends: Battle for Baldur's Gate
    'tclb',  // Battle for Baldur's Gate Tokens
    'plg22', // Love Your LGS 2022
    '2x2',   // Double Masters 2022
    'sch',   // Store Championships 2022
    '40k',   // Warhammer 40,000
    't40k',  // Warhammer 40,000 Tokens
    'dmc',   // Dominaria United Commander
    'dmu',   // Dominaria United
    'bro',   // The Brothers' War
    'tunf',  // Unfinity Tokens
    'unf',   // Unfinity
    // END_SECTION SET_ATOM_VALUES
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
);