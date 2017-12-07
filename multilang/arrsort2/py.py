arr = [
    {
         "name": "Tanaka",
        "score": 80
    },
    {
        "name": "Sasaki",
        "score": 85
    },
    {
        "name": "Sato",
        "score": 72
    }
]

sort = sorted(arr, key=lambda x: x["score"])

print(sort)
