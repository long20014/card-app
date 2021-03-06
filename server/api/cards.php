<?php
header('Access-Control-Allow-Origin: *');	
header('Content-type: application/json; charset=utf-8');
$data = '{
	"cards": [
		{
			"id": 1,
			"cardName": "Dark Dragon",
			"cardLevel": 8,
			"cardRarity": "legendary",
			"cardAvatarUrl": "assets/img/background/u37XjCk.jpg",
			"cardHP": 10000,
			"cardMP": 500,
			"cardAtk": 3000,
			"cardDef": 2500,
			"cardType": "[Dragon]",
			"cardDesc": "Legendary dark dragon. Can use \"dark blame breath\" which deal 3000 damage to all enemies. Cost 200 mana. CD 4 turns."
		},
		{
			"id": 2,
			"cardName": "Dark Dragon",
			"cardLevel": 8,
			"cardRarity": "epic",
			"cardAvatarUrl": "assets/img/background/u37XjCk.jpg",
			"cardHP": 10000,
			"cardMP": 500,
			"cardAtk": 3000,
			"cardDef": 2500,
			"cardType": "[Dragon]",
			"cardDesc": "Legendary dark dragon. Can use \"dark blame breath\" which deal 3000 damage to all enemies. Cost 200 mana. CD 4 turns."
		},
		{
			"id": 3,
			"cardName": "Dark Dragon",
			"cardLevel": 8,
			"cardRarity": "rare",
			"cardAvatarUrl": "assets/img/background/u37XjCk.jpg",
			"cardHP": 10000,
			"cardMP": 500,
			"cardAtk": 3000,
			"cardDef": 2500,
			"cardType": "[Dragon]",
			"cardDesc": "Legendary dark dragon. Can use \"dark blame breath\" which deal 3000 damage to all enemies. Cost 200 mana. CD 4 turns."
		},
		{
			"id": 4,
			"cardName": "Dark Dragon",
			"cardLevel": 8,
			"cardRarity": "legendary",
			"cardAvatarUrl": "assets/img/background/u37XjCk.jpg",
			"cardHP": 10000,
			"cardMP": 500,
			"cardAtk": 3000,
			"cardDef": 2500,
			"cardType": "[Dragon]",
			"cardDesc": "Legendary dark dragon. Can use \"dark blame breath\" which deal 3000 damage to all enemies. Cost 200 mana. CD 4 turns."
		},
		{
			"id": 5,
			"cardName": "Dark Dragon",
			"cardLevel": 8,
			"cardRarity": "legendary",
			"cardAvatarUrl": "assets/img/background/u37XjCk.jpg",
			"cardHP": 10000,
			"cardMP": 500,
			"cardAtk": 3000,
			"cardDef": 2500,
			"cardType": "[Dragon]",
			"cardDesc": "Legendary dark dragon. Can use \"dark blame breath\" which deal 3000 damage to all enemies. Cost 200 mana. CD 4 turns."
		},
		{
			"id": 6,
			"cardName": "Dark Dragon",
			"cardLevel": 8,
			"cardRarity": "epic",
			"cardAvatarUrl": "assets/img/background/u37XjCk.jpg",
			"cardHP": 10000,
			"cardMP": 500,
			"cardAtk": 3000,
			"cardDef": 2500,
			"cardType": "[Dragon]",
			"cardDesc": "Legendary dark dragon. Can use \"dark blame breath\" which deal 3000 damage to all enemies. Cost 200 mana. CD 4 turns."
		},
		{
			"id": 7,
			"cardName": "Dark Dragon",
			"cardLevel": 8,
			"cardRarity": "rare",
			"cardAvatarUrl": "assets/img/background/u37XjCk.jpg",
			"cardHP": 10000,
			"cardMP": 500,
			"cardAtk": 3000,
			"cardDef": 2500,
			"cardType": "[Dragon]",
			"cardDesc": "Legendary dark dragon. Can use \"dark blame breath\" which deal 3000 damage to all enemies. Cost 200 mana. CD 4 turns."
		},
		{
			"id": 8,
			"cardName": "Dark Dragon",
			"cardLevel": 8,
			"cardRarity": "epic",
			"cardAvatarUrl": "assets/img/background/u37XjCk.jpg",
			"cardHP": 10000,
			"cardMP": 500,
			"cardAtk": 3000,
			"cardDef": 2500,
			"cardType": "[Dragon]",
			"cardDesc": "Legendary dark dragon. Can use \"dark blame breath\" which deal 3000 damage to all enemies. Cost 200 mana. CD 4 turns."
		},
		{
			"id": 9,
			"cardName": "Dark Dragon",
			"cardLevel": 8,
			"cardRarity": "rare",
			"cardAvatarUrl": "assets/img/background/u37XjCk.jpg",
			"cardHP": 10000,
			"cardMP": 500,
			"cardAtk": 3000,
			"cardDef": 2500,
			"cardType": "[Dragon]",
			"cardDesc": "Legendary dark dragon. Can use \"dark blame breath\" which deal 3000 damage to all enemies. Cost 200 mana. CD 4 turns."
		},
		
	]
}';
echo json_encode($data);

?>
