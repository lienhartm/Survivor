```mermaid
flowchart

    id1[1 Plane crash]
    id2[2 Arrive on the island]
    id3[3 Stay where you are]
    id4[4 Find coconuts]
    id5[5 New day new choice]
    id6[6 Difficult night by the river]
    id7[7 Snakebite]
    id8[8 Make a raft]
    id9[9 Guard falls asleep]
    id10[10 Hill bonfire made]
    id11[11 Sleep in trees]
    id12[12 Bad swim]
    id13[13 Shoot bird]
    id14[14 Build a raft]
    id15[15 No food]
    id16[16 Find water]
    id17[17 Sail for island]
    id18[18 Campsite on the beach]
    id19[19 Difficult decision]
    id20[20 Save colleague]
    id21[21 Go fishing]
    id22[22 Saved by plane]
    id23[23 Sleep in water]
    id24[24 Get water]
    id25[25 No knife]
    id26[26 Raft no axe]
    id27[27 Saved by boat]
    id28[28 Watch bird]
    id29[29 Saved by boat]
    id30[30 On hill top]
    id31[31 Eat fish]
    id32[32 Wait on beach]
    id33[33 Get food - Mango forest]

    id1 --Choose 3 items and swim to shore--> id2
    id2 --Look for fruit--> id4
    id2 --Try fishing--> id21
    id2 --Look for water--> id16
    id3 --Get water--> id24
    id3 --Get food--> id33
    id4 --No knife--> id25
    id4 --Find water--> id16
    id4 --More food--> id7
    id5 --Hill bonfire--> id10
    id5 --Build a raft--> id14
    id5 --Swim for it!--> id12
    id6 --Leave colleague--> id18
    id6 --Try to save colleague--> id20
    id7 --Get bitten!--> id18
    id8 --Get water--> id24
    id8 --Get food--> id33
    id9 --Pig raid--> id5
    id10 --Get water--> id24
    id10 --Get food--> id33
    id10 --Stay here--> id3
    id11 --Coconut fall!--> id5
    id12 --Bonfire--> id10
    id12 --Raft--> id14
    id13 --Get lead poisoning--> id19
    id14 --Axe? Yes--> id8
    id14 --Axe? No--> id26
    id15 --Too weak, 1 dies--> id19
    id16 --Find food--> id4
    id16 --Camp here--> id6
    id16 --Go back to beach--> id18
    id17 --Sail for island--> Congratulations!
    id18 --In trees--> id11
    id18 --With guard--> id9
    id18 --In water--> id23
    id19 --Sail for island--> id17
    id19 --Stay where you are--> id32
    id19 --Go to hill top--> id30
    id19 --Stay where you are--> id32
    id20 --First aid? Yes--> id5
    id20 --First aid? No-->id5
    id21 --Find food--> id7
    id21 --Find water--> id16
    id22 ----> Congratulations!
    id23 --In trees--> id11
    id23 --With guard--> id9
    id24 --Eat fish--> id31
    id24 --Leave fish--> id15
    id24 --Get food--> id33
    id25 --Find water--> id16
    id25 --Search--> id7
    id26 --Get water--> id24
    id26 --Get food--> id33
    id27 ----> Congratulations!
    id28 --Eat roots, feel fine--> id19
    id29 ----> Congratulations!
    id30 --Congratulations!--> id27
    id30 --Go back to beach--> id32
    id31 --Feel fine--> id19
    id32 --Petrol? Yes--> id22
    id32 --Petrol? No--> id29
    id33 --Shoot bird--> id13
    id33 --Watch bird--> id28
    id33 --Get water--> id24
```














