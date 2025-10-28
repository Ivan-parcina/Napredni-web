# Napisati funkciju prima matricu sa cjelobrojnim elementima i vraća listu
# u kojoj su elementi sume redaka u matrici.


from citanje_matrice import citanje_matrice

def sume_redaka(matrica):
    res = []
    
    for redak in matrica:
        res.append(sum(redak))

    return res

matrica = citanje_matrice("matrica.txt")

print(sume_redaka(matrica))     