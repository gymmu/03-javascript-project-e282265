export function aufgabe01(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   //lösche alle e
   if (currentElement === "e") {
    result.push("")
   } else if (currentElement === "E" ) {
     result.push("")
   }
   else {
    result.push(currentElement)
  }
}

  return result.join("")
}


export function aufgabe02(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wandle das aktuelle Element in einen Grossbuchstaben um
    const capitalizedElement = currentElement.toUpperCase()
    result.push(capitalizedElement)
  }
  return result.join("")
 }

 export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Soll nur ein 'e' enthalten
  if (currentElement === "e"){ 
     count = count + 1
   }
   //Soll grosses 'E' zählen
    else if (currentElement === "E") {
      count = count + 1 
   }
     }
     return count

  return result.join("")
}
 

 export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 1
  

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Soll alle Leerzeichen zählen
  if (currentElement === " "){
     count = count + 1
  }

  }
   return count

}



export function aufgabe05(args) {
  const input = args
   const result = []
  let capitalLetters = 0


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  //sollte Grossbuchstaben erkennen
  if (currentElement === "."){}
  else if (currentElement === " "){}
  //wenn ein Element gleich ist, dann rechnet es + 1
  else if (currentElement === currentElement.toUpperCase())
  {capitalLetters++}
}
if (capitalLetters > 0) {
  return true
} else {
  return false
} 

 }

export function aufgabe06(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    const asciiCode = currentElement.charCodeAt (0)
    if (
      (asciiCode <= 31 || asciiCode >= 33 && asciiCode <= 64
        || asciiCode >= 91 && asciiCode <=96 || asciiCode >= 123)
    ) {
      return true
    }

  }
  return false
}

export function aufgabe07(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //sollte ein und erkennen
    if (currentElement === "u")
      if (input[i+1] === "n")
      if (input[i+2]=== "d") { 
       return true
    }
     //sollte ein Und erkennen
     if (currentElement === "U")
      if (input[i+1]=== "n")
      if (input[i+2]=== "d") {
        return true
      }
  }
  return false
}

export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //ersetzt alles 'e' mit einer 3
    if (currentElement === "e") {
      result.push("3")
     } 
     else {
      result.push(currentElement)
    }
  }

  
  return result.join("")
}

export function aufgabe09(args) {
  const input = args
  const result = []
  let len = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    len = len + 1 
  }
   //teste ob eine Eingabe genau sechs Zeichen lang ist
  if (len === 6) {
    return true
  } else {
    return false
  }
  return len
 }

 export function aufgabe10(args) {
  const input = args

  if (input.length !== 7) return false
  if (input[0] !== "#") return false

  for (let i = 1; i < input.length; i++) { 
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (48 <= ascii && ascii <= 57) {
    // mache nichts; ist eine Zahl    
  } else if (65 <= ascii && ascii <= 70) {
    //mache nichts; ist A-F
  } else {
    return false
  }
}

return true
 }

export function aufgabe11(args) {
  const input = args
  let ascii = null

if ( input.length > 1 ) { //Funktionswächter
  return null
}
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    ascii = currentElement.charCodeAt(0)
    return ascii
  }
  return null
}

export function aufgabe12(args) {
  const input = args

  let pos = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    pos = pos + 1 
    if (currentElement === 'e' ) {
      return pos
    }
  }
  return -1 
}

export function aufgabe13(args) {
  const input = args
  const result = []

  let positionOfLastE = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e' ) {
      positionOfLastE = i
    }
  }
  return positionOfLastE
}

export function aufgabe14(args) {
  const input = args
  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //suche die Position des dritten e
    if (currentElement === 'e' ) {
      countE = countE + 1
      if (countE === 3) {
        return i

      }
    }
  }
  return -1
}

export function aufgabe15(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  //breche nach dem ersten Leerschlag ab 
  if (currentElement === ' ') { 
    return result.join("")
  }
  result.push(currentElement)
  }
  return result.join("")
}









export function aufgabe16(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}



export function aufgabe17(args) {
  const input = args
  const result = input.split(',')

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i;j++){
      if (result[j] > result[j + 1]) {

        [result[j], result[j + 1]] = [result[j + 1], result[j]]
      }
    }
    
  }
  return result.join(',')
}







export function aufgabe18(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}







export function aufgabe20(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Es soll prüfen, ob nach jedem "." ein Leerschlag ist
    if (currentElement === ".") {
      if (input[i+1] === " ") {
        return true
      }
    }
  }
  return false
}







export function aufgabe21(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

export function aufgabe22(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

export function aufgabe23(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

export function aufgabe24(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

export function aufgabe25(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

export function aufgabe26(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

export function aufgabe27(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

export function aufgabe28(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  
}






export function bubbleSort (args) {
  
  const text = args
  const list = text.split("") //Mit diesem Code wandle ich den Text um, somit kann das Element vertauscht werden


  for (let i = 0;i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)){
      //Elemente müssen vertauscht werden, da die Reihenfolge nicht korrekt ist.

      const tmp = list[i+1]

      list[i+1] = list[i]

      list[i] = tmp
      i = -1 //von vorne anfangen
    }
  }

  const result = list.join("")
  console.log(result)

  return result
}