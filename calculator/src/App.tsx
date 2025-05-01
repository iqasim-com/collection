import './App.css'
import {Button, Input} from 'mq-design-system'
import {useState} from "react";
import {buttons, operators} from "./config.ts";

function App() {
  const [input, setInput] = useState('');

  const calculatorInput = (input: any) => {
    if (typeof input === 'number') {
      setInput((prev) => prev + input)
    }
  }

  const clear = () => {
    setInput('')
  }
  
  return (
    <>
      <div className="flex justify-center align-center h-full flex-col items-center">
        <div className="inline border border-gray-300 rounded-md p-4 bg-white">
          <div className="mb-10 text-black">
            <span>{input}</span>
            <Input additionalClasses="text-4xl p-4 w-full" placeholder="0" value={input} />
          </div>
          <div className="mb-3">
            <div className="grid grid-cols-3 gap-2">
              <Button variant="danger" click={clear}>AC</Button>
              {buttons.map((button, index) => (
                <Button
                  key={Date.now() + index}
                  variant="dark"
                  click={() => calculatorInput(button)}
                >
                  {button}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              {operators.map((button, index) => (
                <Button
                  key={Date.now() + index}
                  variant="info"
                  click={() => calculatorInput(button)}
                >
                  {button}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
