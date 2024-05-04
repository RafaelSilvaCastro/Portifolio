#SENAI Nami Jafet
#Rafael da Silva Castro

# instalar no terminal
# pip install opencv-python
# pip install pyqt6

# importando biblioteca padrão de sistema
import sys
# importando biblioteca PyQt6 com seus elementos 
from PyQt6.QtWidgets import QApplication, QWidget, QLabel, QPushButton, QLineEdit

# criando a tela da calculadora
app = QApplication(sys.argv)
janela = QWidget()
janela.resize(330,480)
janela.setWindowTitle("Calculadora")

# chamar o css no python
with open("calculadora/style.css", "r") as file:
    app.setStyleSheet(file.read())
    

# funçao evento de clicar e adcionar na calculadora
def exibirNoDisplay(x):
    valorDoDisplay = display.text() 
    colocarNoDisplay = valorDoDisplay + x 
    display.setText(colocarNoDisplay)
    
#funçao para fazer o calculo
def calcular():
    # funçao eval calcula um conhunto numerico
    resultado = eval(display.text())
    #print(resultado)
    display.setText(str(resultado))
    
def limpar():
    display.setText("")
    
    
# criando a janela
display = QLineEdit("",janela)
display.setGeometry(50, 60, 230, 50)

# primeira linha
btnUm = QPushButton("1", janela)
btnUm.setGeometry(50, 130, 50, 50)
btnUm.clicked.connect(lambda: exibirNoDisplay('1'))

btnDois = QPushButton("2", janela)
btnDois.setGeometry(110, 130, 50, 50)
btnDois.clicked.connect(lambda: exibirNoDisplay('2'))

btnTres = QPushButton("3", janela)
btnTres.setGeometry(170, 130, 50, 50)
btnTres.clicked.connect(lambda: exibirNoDisplay('3'))

btnDividir = QPushButton("/", janela)
btnDividir.setGeometry(230, 130, 50, 50)
btnDividir.setStyleSheet("background-color: #BFFF00; font-size: 15px; font-family: Lucida Console")
btnDividir.clicked.connect(lambda: exibirNoDisplay('/'))

#segunda linha
btnQuatro= QPushButton("4", janela)
btnQuatro.setGeometry(50, 190, 50, 50)
btnQuatro.clicked.connect(lambda: exibirNoDisplay('4'))

btnCinco = QPushButton("5", janela)
btnCinco.setGeometry(110, 190, 50, 50)
btnCinco.clicked.connect(lambda: exibirNoDisplay('5'))

btnSeis = QPushButton("6", janela)
btnSeis.setGeometry(170, 190, 50, 50)
btnSeis.clicked.connect(lambda: exibirNoDisplay('6'))

btnMult = QPushButton("x", janela)
btnMult.setGeometry(230, 190, 50, 50)
btnMult.setStyleSheet("background-color: #BFFF00; font-size: 15px; font-family: Lucida Console")
btnMult.clicked.connect(lambda: exibirNoDisplay('*'))

#terceira linha  
btnSete= QPushButton("7", janela)
btnSete.setGeometry(50, 250, 50, 50)
btnSete.clicked.connect(lambda: exibirNoDisplay('7'))

btnOito = QPushButton("8", janela)
btnOito.setGeometry(110, 250, 50, 50)
btnOito.clicked.connect(lambda: exibirNoDisplay('8'))

btnNove = QPushButton("9", janela)
btnNove.setGeometry(170, 250, 50, 50)
btnNove.clicked.connect(lambda: exibirNoDisplay('9'))

btnMenos = QPushButton("-", janela)
btnMenos.setGeometry(230, 250, 50, 50)
btnMenos.setStyleSheet("background-color: #BFFF00; font-size: 15px; font-family: Lucida Console")
btnMenos.clicked.connect(lambda: exibirNoDisplay('-'))

#quarta linha
btnZero= QPushButton("0", janela)
btnZero.setGeometry(50, 310, 50, 50)
btnZero.clicked.connect(lambda: exibirNoDisplay('0'))

btnponto = QPushButton(".", janela)
btnponto.setGeometry(110, 310, 50, 50)
btnponto.clicked.connect(lambda: exibirNoDisplay('.'))

btnIgual = QPushButton("=", janela)
btnIgual.setGeometry(170, 310, 50, 50)
btnIgual.clicked.connect(calcular)

btnSoma = QPushButton("+", janela)
btnSoma.setGeometry(230, 310, 50, 50)
btnSoma.setStyleSheet("background-color: #BFFF00; font-size: 15px; font-family: Lucida Console")
btnSoma.clicked.connect(lambda: exibirNoDisplay('+'))

#quinta linha
btnElevado= QPushButton("**", janela)
btnElevado.setGeometry(50, 370, 50, 50)
btnElevado.clicked.connect(lambda: exibirNoDisplay('**'))

btnPorcentagem = QPushButton("%", janela)
btnPorcentagem.setGeometry(110, 370, 50, 50)
btnPorcentagem.clicked.connect(lambda: exibirNoDisplay('%'))

btnLimpar = QPushButton("C", janela)
btnLimpar.setGeometry(170, 370, 110, 50)
btnLimpar.setStyleSheet("background-color: #BFFF00; font-size: 25px; font-family: Lucida Console")
btnLimpar.clicked.connect(limpar)



# executando a calculadora
janela.show()
app.exec()
