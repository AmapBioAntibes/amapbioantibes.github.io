//console.log("Loading cipher.js")

// Un lien pour jouer avec le chiffrement de Vigenère en ligne
// https://www.dcode.fr/vigenere-cipher

// déchiffre le numéro de téléphone selon algo Vigenère simplifié
function vigerene_decipher(vector, key) {
  //console.log("decipher ",vector," with key ",key)
  m = key.length;
  res = [...vector]; //clone
  vector.forEach(function (item, index, array) {
    //console.log(item,key[index%m],(item-key[index%m])%10)
    r = (item - key[index % m]) % 10;
    res[index] = r >= 0 ? r : r + 10;
  });
  return res;
}

// retourne le précédent contenu ... peut être utile
function changeContent(element, new_content) {
  old_content = element.textContent;
  element.textContent = new_content;
  return old_content;
}

// string -> array[ map_func( "character" )  ]
function textToVector(message, map_func) {
  return Array.prototype.map.call(message, function (c) {
    return map_func(c);
  });
}

// array[ 1, 2, 3 ] = "123"
function VectorToText(vector) {
  return vector.join('');
}

// qui fait tout
function decipher(message, key) {
  //console.log("decipher",message," with key ",key)
  v = textToVector(message, parseInt);
  //console.log("v",v)
  k_v = textToVector(key, parseInt);
  //console.log("k_v",k_v)
  v_decoded = vigerene_decipher(v, k_v);
  //console.log("v_decoded",v_decoded)
  return VectorToText(v_decoded);
}
