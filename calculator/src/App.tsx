import './App.css'
import {Button, Input} from 'mq-design-system'
import {useState} from "react";

function App() {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '+', '-', '=', 'x', '/'];
  const [input, setInput] = useState();

  const calculatorInput = (input) => {
    setInput(input)
  }
  return (
    <>
      <div className="flex justify-center align-center h-full flex-col items-center">
        <div className="inline w-1/2 border border-gray-300 rounded-md p-4">
          <div className="mb-10">
            <Input additionalClasses="text-4xl p-4 w-full" placeholder="0" value={input} />
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              {buttons.map((button, index) => (
                <Button
                  key={Date.now() + index}
                  variant="primary"
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
