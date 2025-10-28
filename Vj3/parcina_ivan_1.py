# Napisati funkciju koja iz datoteke čita matricu sa cjelobrojnim elementima i vraća zbroj elemenata iznad glavne dijagonale i zbroj elemenata
# iznad sporedne dijagonale. Ako matrica nije kvadratna, funkcija vraća
# nule.
# Primjer: Za matricu
# 2 4 6 8
# 5 3 4 6
# 1 3 5 6
# 0 3 5 7
# funkcija vraća (34, 21)


from citanje_matrice import citanje_matrice 

def zbroj_elemenata(file_name):
    matrica = citanje_matrice(file_name)
    
    zbroj_glavna = 0
    zbroj_sporedna = 0
    
    len_redak = len(matrica)
    
    for redak in matrica:
        if len(redak) != len_redak:
            return zbroj_glavna, zbroj_sporedna
    
    for i in range(len(matrica)):
        for j in range(len(matrica[i])):
            if j > i:
                zbroj_glavna += matrica[i][j]
            elif j < i:
                zbroj_sporedna += matrica[i][j]
                
    return zbroj_glavna, zbroj_sporedna


print(zbroj_elemenata("matrica.txt"))