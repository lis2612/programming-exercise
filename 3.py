arr_name = [
    {"name": "Lisa"},
    {"name": "Bart"},
    {"name": "Maggie"},
    {"name": "Masha"}
]


def interestingMethod(arr=[]):
    names=[]
    finalString=''
    for item in arr:
      names.append(item.get('name'))
    endName=names.pop()
    for name in names:
      finalString+=name+', '
    return endName if len(names)==0 else finalString.removesuffix(', ')+'&'+endName


print(interestingMethod(arr_name))
