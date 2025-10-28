# U datoteci se u svakom retku nalaze dva cijela broja. Napisati funkciju
# koja čita datoteku i sprema podatke u dictionary tako da je prvi broj u
# retku ključ, a drugi broj element liste vrijednosti tog ključa.


from citanje_matrice import citanje_matrice

def spremi_dictionary(file_name):
    matrica = citanje_matrice(file_name)
    
    res = {}
    
    for redak in matrica:
        if(len(redak) != 2):
            print("Matrica nema redke od dva clana")
            return
        
    for i in range(len(matrica)):
        res[matrica[i][0]] = matrica[i][1]
    
    return res

print(spremi_dictionary("matrica.txt"))