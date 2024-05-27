# salvar informação dos proprietarios de veiculos
# cadastramento
def informacoes():
    pessoas = {
        'FBI-5551': ['MARLON', 'NEW CIVIC', 2022],
        'AAA-5551': ['ENZO', 'GOLF', 2021],
        'UTS-0000': ['RAUL', 'ECLIPSE', 2023],
        'HQW-5678': ['JONATHAN', 'LANCER', 2022],
        'IRS-1836': ['GUSTAVO', 'NEW BEATLE', 2023]
    }
    return pessoas

# # Exibir todos os dados do dicionario?
# print('Exibição de todos')
# for k,v in pessoas.items():
#     print(f'Placa: {k} Proprietario: {v[0]} modelo: {v[1]} ano: {v[2]}')

# # Exibir todas as placas de veiculo(somente as placas)
# print('\nTodas as placas\n')
# for i in pessoas:
#     print(i)

# # Exibir todos os proprietariios de veiculos(somente proprietarios)
# print('\nNome dos proprietarios\n')
# for k,v in pessoas.items():
    
#     print(f'Nome: {v[0]}')

