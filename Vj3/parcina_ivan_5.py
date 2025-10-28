#  Dan je dictionary kojem su ključevi brojevi, a vrijednosti liste brojeva.
# Napisati funkciju koja okreće dictionary, na način da brojevi iz value listi
# postaju keys, a keys postaju članovi value listi.
# Primjer: Za d = {1:[2,3,5], 2:[1, 4], 3:[1,2]} novi dictionary je {1:[2,3],
# 2:[1,3], 3:[1], 4:[2], 5:[1]}


def okreni_dict(dic):
    res = {}
    
    for key, value in dic.items():
        for v in value:
            if v not in res:
                res[v] = []
            res[v].append(key)
    
    return dict(sorted(res.items()))

d = {1:[2,3,5], 2:[1, 4], 3:[1,2]}

print(okreni_dict(d))