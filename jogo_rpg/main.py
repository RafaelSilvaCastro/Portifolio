from random import randint

lista_npcs = []

player = {
    "nome": "Rafael",
    "level": 1,
    "exp": 0,
    "exp_max": 50,
    "hp": 100,
    "hp_max": 100,
    "dano": 25,
}

def criar_npc(level):

    novo_npc = {
        
        "nome": f"Monstro #{level}",
        "level": level,
        "dano": 5 * level,
        "hp": 100 * level,
        "hp_max": 100 * level,
        "exp": 7 * level,
    }
    
    return novo_npc

#fim função criar npc
       
        
def gerar_npcs(n_npcs):
    
    for x in range(n_npcs):
        npc = criar_npc(x + 1)
        lista_npcs.append(npc)

#fim função gerar npcs  

        
def exibir_npcs():
    for npc in lista_npcs:
        exibir_npc(npc)
        
#fim função exibir npcs

def exibir_npc(npc):
    print(f"Nome: {npc['nome']} // Level: {npc['level']} // Dano: {npc['dano']} // HP: {npc['hp']} // EXP: {npc['exp']}")

#fim da função exibir npc

def exibir_player():
    print(f"Nome: {player['nome']} // Level: {player['level']} // Dano: {player['dano']} // HP: {player['hp']} / {player['hp_max']}  // EXP: {player['exp']} / {player['exp_max']}")
    
#fim da função exibir player
    
def reset_player():
    player['hp'] = player['hp_max']
    
#fim reset player
    
def reset_npc(npc):
    npc['hp'] = npc['hp_max']
    
#fim reset npc

def level_up():
    if player['exp'] >= player['exp_max']:
        player['level'] += 1
        player['exp'] = 0
        player['exp_max'] = player['exp_max'] * 2
        player['hp_max'] += 20

#fim level up

def iniciar_batalha(npc):
    while player['hp'] > 0 and npc['hp'] > 0:  
        atacar_npc(npc)
        atacar_player(npc)
        exibir_info_batalha(npc)
        
        if player['hp'] > 0:
            print(f"O {player['nome']} venceu e ganhou {npc['exp']} de EXP!")
            player['exp'] += npc['exp']
            exibir_player()
        else:
            print(f"O {npc['nome']} venceu!")
            exibir_npc(npc)
            
        level_up()
        reset_player()
        reset_npc(npc)
        
#fim função iniciar batalha


def atacar_npc(npc):
    npc['hp'] -= player["dano"]
    
#fim fução atacar npc



def atacar_player(npc):
    player["hp"] -= npc['dano']
    
#fim função atacar player


def exibir_info_batalha(npc):
    print(f"Palyer: {player['hp']} / {player['hp_max']}")
    print(f"NPC: {npc['nome']} {npc['hp']} / {npc['hp_max']}")
    print(30*"-")   

#fim função exibir info batalha
 
      
gerar_npcs(5)
#exibir_npcs()

npc_selecionado = lista_npcs[0]
iniciar_batalha(npc_selecionado)

    
