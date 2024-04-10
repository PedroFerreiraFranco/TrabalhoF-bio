// Tabela de caracteres mapeados
var tabelaCaracteres = {
    "A": 1, "Á": 2, "À": 3, "Ã": 4, "Â": 5,
    "B": 6,
    "C": 7, "Ç": 8,
    "D": 9,
    "E": 10, "É": 11, "È": 12, "Ẽ": 13, "Ê": 14,
    "F": 15,
    "G": 16,
    "H": 17,
    "I": 18, "Í": 19, "Ì": 20, "Ĩ": 21, "Î": 22,
    "J": 23,
    "K": 24,
    "L": 25,
    "M": 26,
    "N": 27, "Ñ": 28,
    "O": 29, "Ó": 30, "Ò": 31, "Õ": 32, "Ô": 33,
    "P": 34,
    "Q": 35,
    "R": 36,
    "S": 37,
    "T": 38,
    "U": 39, "Ú": 40, "Ù": 41, "Ũ": 42, "Û": 43,
    "V": 44,
    "W": 45,
    "X": 46,
    "Y": 47, "Ý": 48,
    "Z": 49,
    "a": 50, "á": 51, "à": 52, "ã": 53, "â": 54,
    "b": 55,
    "c": 56, "ç": 57,
    "d": 58,
    "e": 59, "é": 60, "è": 61, "ẽ": 62, "ê": 63,
    "f": 64,
    "g": 65,
    "h": 66,
    "i": 67, "í": 68, "ì": 69, "ĩ": 70, "î": 71,
    "j": 72,
    "k": 73,
    "l": 74,
    "m": 75,
    "n": 76, "ñ": 77,
    "o": 78, "ó": 79, "ò": 80, "õ": 81, "ô": 82,
    "p": 83,
    "q": 84,
    "r": 85,
    "s": 86,
    "t": 87,
    "u": 88, "ú": 89, "ù": 90, "ũ": 91, "û": 92,
    "v": 93,
    "w": 94,
    "x": 95,
    "y": 96, "ý": 97,
    "z": 98,
    "0": 99, "1": 100, "2": 101, "3": 102, "4": 103,
    "5": 104, "6": 105, "7": 106, "8": 107, "9": 108,
    "!": 109, "@": 110, "#": 111, "$": 112, "%": 113,
    "^": 114, "&": 115, "*": 116, "(": 117, ")": 118,
    "_": 119, "+": 120, "-": 121, "=": 122, "{": 123,
    "}": 124, "[": 125, "]": 126, "|": 127, ";": 128,
    "'": 129, '"': 130, "<": 131, ">": 132, ",": 133,
    ".": 134, "/": 135, "?": 136, "~": 137, "`": 138,
    "\\": 139, "º": 140, "ª": 141, "°": 142, " ":143
};

function encode() {
    var login = document.getElementById('inputLogin').value;
    var senha = document.getElementById('inputSenha').value;
    var encodedLogin = encodeText(login);
    var encodedSenha = encodeText(senha);
    document.getElementById('output').innerText = "Login codificado: " + encodedLogin + "\nSenha codificada: " + encodedSenha;
    clearFields(); // Limpa os campos após codificar
}

function decode() {
    var encodedLogin = document.getElementById('inputLogin').value;
    var encodedSenha = document.getElementById('inputSenha').value;
    var decodedLogin = decodeText(encodedLogin);
    var decodedSenha = decodeText(encodedSenha);
    document.getElementById('output').innerText = "Login decodificado: " + decodedLogin + "\nSenha decodificada: " + decodedSenha;
    clearFields(); // Limpa os campos após decodificar
}

// Função para codificar texto
function encodeText(text) {
    var encodedText = '';
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if (tabelaCaracteres[char] !== undefined) {
            encodedText += tabelaCaracteres[char] + ' ';
        } else {
            // Se o caractere não estiver na tabela, mantenha-o sem alterações
            encodedText += char + ' ';
        }
    }
    return encodedText.trim();
}

// Função para decodificar texto
function decodeText(text) {
    var decodedText = '';
    var encodedChars = text.split(' ');
    for (var i = 0; i < encodedChars.length; i++) {
        var code = parseInt(encodedChars[i]);
        for (var char in tabelaCaracteres) {
            if (tabelaCaracteres[char] === code) {
                decodedText += char;
                break;
            }
        }
    }
    return decodedText;
}

// Função para limpar os campos de texto
function clearFields() {
    document.getElementById('inputLogin').value = '';
    document.getElementById('inputSenha').value = '';
}