# Napisati funkciju prima matricu sa cjelobrojnim elementima i provjerava
# ima li matrica točno dvije jedinice u svakom stupce, a ostale elemente
# stupca nula. Ako postoji stupac koji ne zadovoljava taj uvjet, funkcija
# vraća False, inače True.

from citanje_matrice import citanje_matrice

def provjera_stupaca(matrica):
    
    for i in range(len(matrica[0])):
        zbroj_jedinica = 0
        for j in range(len(matrica)):
            if matrica[j][i] == 1:
                zbroj_jedinica += 1
            elif matrica[j][i] != 0 or zbroj_jedinica > 2:
                return False
        if zbroj_jedinica != 2:
            return False
        
    return True

matrica = citanje_matrice("matrica.txt")

print(provjera_stupaca(matrica))