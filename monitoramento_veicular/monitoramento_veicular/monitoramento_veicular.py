# C:\Users\Aluno\AppData\Local\Programs\Tesseract-OCR\tesseract.exe


# pip install opencv-python
# pip install pyqt6

# importando as bibliotecas opencv-python, sys e PyQt6 com seus elementos 
import sys
import cv2
from PyQt6.QtWidgets import QApplication, QWidget, QLabel, QPushButton, QLineEdit


# trazendo os dados cadastrados para uso no projeto
import dados
dadosPessoas = dados.informacoes()

import reconhecimento_caracter
# criar uma função para reconhecer os caracteres
def buscar():
    placaReconhecida = reconhecimento_caracter.reconhecer('monitoramento_veicular/monitoramento_veicular/placas/placa4.jpg') #mudar o caminho da imagem
    
    # verificando se no meio dos textos reconhecidos tem a placa cadastrada
    for p in dadosPessoas:
        if p in placaReconhecida:
            print(dadosPessoas[p][0])
            
# função para abrir camera
def abrirCamera():
    camera = cv2.VideoCapture(0) 
    while True:
        # mostrando a camera 
        sucesso, frame = camera.read()  
        cv2.imshow("imagem", frame)
        
        # verificar se na imagem capturada esta a nossa placa
        # convertendo o frame em imagem
        cv2.imwrite("monitoramento_veicular/monitoramento_veicular/placas/placaCapturada.jpg", frame) #mudar o caminho da imagem
        placaReconhecida = reconhecimento_caracter.reconhecer("monitoramento_veicular/monitoramento_veicular/placas/placaCapturada.jpg") #mudar o caminho da imagem
                
        # loop para ahar o dono da placa
        for p in dadosPessoas:
            if p in placaReconhecida:
                # exibindo as informações do dono do carro
                #print(dadosPessoas[p][0])   
                txtNome.setText(dadosPessoas[p][0])   
                txtModelo.setText(dadosPessoas[p][1])  
                txtPlaca.setText(str(p)) # converte para texto
                txtAno.setText(str(dadosPessoas[p][2])) # converte para texto  
        
        # para fechar a camera
        if cv2.waitKey(1) & 0xFF == ord("s"):
            break
        
    camera.release()
    cv2.destroyAllWindows()
        
    
#função para limpar os campos
def limpar():
    txtAno.setText("")
    txtModelo.setText("")
    txtNome.setText("")
    txtPlaca.setText("")

    
# criando a tela de monitoriamento veicular
app = QApplication(sys.argv)
janela = QWidget()
janela.resize(400,400)
janela.setWindowTitle("Monitoramento Veicular")

# chamar o css no python
with open("monitoramento_veicular/monitoramento_veicular/style.css", "r") as file:
    app.setStyleSheet(file.read())
    

# criando os campos da tela  
lblTitulo = QLabel("Monitoramento Veicular", janela)
lblTitulo.move(90, 30)
lblTitulo.setStyleSheet("font-size: 20px")

lblNome = QLabel("Nome", janela)
lblNome.move(50, 85)

txtNome = QLineEdit("",janela)
txtNome.setGeometry(150, 80, 200, 30)

lblModelo = QLabel("Modelo", janela)
lblModelo.move(50, 135)

txtModelo = QLineEdit("",janela)
txtModelo.setGeometry(150, 130, 200, 30)

lblPlaca = QLabel("Placa", janela)
lblPlaca.move(50, 185)

txtPlaca = QLineEdit("",janela)
txtPlaca.setGeometry(150, 180, 200, 30)

lblAno = QLabel("Ano Veículo", janela)
lblAno.move(50, 235)

txtAno = QLineEdit("",janela)
txtAno.setGeometry(150, 230, 200, 30)

# criando o botao responsavel para abri a camera 
btnEntrar = QPushButton("Abrir Câmera", janela)
btnEntrar.setGeometry(30, 300, 160, 50)
btnEntrar.clicked.connect(abrirCamera) # responsavel por chamar a funçao para abrir a camera

# criando o botao para limpar as informações
btnLimpar = QPushButton("Limpar", janela)
btnLimpar.setGeometry(200, 300, 160, 50)
btnLimpar.clicked.connect(limpar)

# executando o monitoriamento
janela.show()
app.exec()