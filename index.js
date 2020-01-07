function takeANumber(line, name){
  
  
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
  return katzDeliLine[0]
  katz.DeliLine.shift()
  }
  
}

function currentLine(line){
  
  if (line.length === 0){
    return "The line is currently empty."
  } else {
  let str = "The line is currently: "
  
  for (let i = 0; i < line.length; i++){
    str = str + `${i+1}. ${line[i]}`
    if (line.length !== i + 1){
      str = str + ','
    }
  }
  
  return str
  }
}