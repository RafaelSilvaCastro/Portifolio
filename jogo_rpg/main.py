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
        print(f"Nome: {npc['nome']} // Level: {npc['level']} // Dano: {npc['dano']} // HP: {npc['hp']} // EXP: {npc['exp']}")
        
#fim função exibir npcs
 

def iniciar_batalha(npc):
    while player['hp'] > 0 and npc['hp'] > 0:  
        atacar_npc(npc)
        atacar_player(npc)
        exibir_info_batalha(npc)
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
    print(20*"-")   

#fim função exibir info batalha
 
      
gerar_npcs(5)
#exibir_npcs()

npc_selecionado = lista_npcs[0]
iniciar_batalha(npc_selecionado)

    
