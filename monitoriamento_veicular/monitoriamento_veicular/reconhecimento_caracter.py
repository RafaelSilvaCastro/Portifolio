# C:\Users\Aluno\AppData\Local\Programs\Tesseract-OCR\tesseract.exe

import cv2
import pytesseract


def reconhecer(imagem):
       
    # Chamando por executavel de reconhecimentos de cacteres (biblioteca)
    pytesseract.pytesseract.tesseract_cmd=r"C:\Program Files\Tesseract-OCR\tesseract.exe"

    # Leitura de imagem que contem textos
    placa = cv2.imread(imagem, 0)

    # Converter/capturar textos da imagem
    meus_textos = pytesseract.image_to_string(placa, config='1 eng --oem 3 --psm 12')

    # print(meus_textos)
    return meus_textos


# Enviar uma imagem para função e exibir os textos reconhecidos
# imagem = "python_senai/05/monitoriamento_veicular/placas/placa2.jpg"

# textosReconhecidos = reconhecer(imagem)
# print(textosReconhecidos)


 
