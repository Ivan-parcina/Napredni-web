# -*- coding: utf-8 -*-
"""
Created on Tue Oct 28 10:39:41 2025

@author: PC
"""

def citanje_matrice(file_name):
    file = open(f"{file_name}", "r")
    rez = []
    
    for line in file:
        redak = line.split()
        for i in range(len(redak)):
            redak[i] = int(redak[i])
        rez.append(redak)    
    
    file.close() #moze se koristiti i with open()
    return rez
        
citanje_matrice("matrica.txt")