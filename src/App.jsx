import { useState } from 'react'
// import { useForm } from "react-hook-form";
import './App.css'
//import '@shoelace-style/shoelace/dist/themes/base.css'
import 'medblocks-ui'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <div className="App">
      <h1>Patient Form</h1>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        

        <input name="name[0].given"  />

        

        <input type="submit" />
      </form> */}

      <mb-fhir-form>
        <mb-context path="resourceType" data="Patient"></mb-context>
        <mb-input path="name[0.given"></mb-input>
      </mb-fhir-form>

    </div>
  )
}

export default App
