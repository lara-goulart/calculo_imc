import { useState } from "react"

import styles from './Form.module.css'

function Form() {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [result, setResult] = useState('')
    const [showTable, setShowTable] = useState(false)

    function returnHeightData(heightEvent) {
        setHeight(parseFloat(heightEvent.target.value))
    }

    function returnWeightData(weightevent) {
        setWeight(parseFloat(weightevent.target.value))
    }

    function calcImc(event) {
        event.preventDefault()
        const calcHeight = height * height
        const resultImc = (weight / calcHeight).toFixed(2)
        

        if(resultImc < 18.5) {
            setResult(`Seu IMC é de ${resultImc}. Você está abaixo do peso.`)
        }else if(resultImc >= 18.5 && resultImc <= 24.9) {
            setResult(`Seu IMC é de ${resultImc}.Você está no peso ideal!`)
        }else if(resultImc >= 25 && resultImc <= 34.9) {
            setResult(`Seu IMC é de ${resultImc}. Cuidado! você está com obesidade Grau I`)
        }else if(resultImc >=35 && resultImc <= 39.9) {
           setResult(`Seu IMC é de ${resultImc}. Cuidado! você está com obesidade Grau II`)
        }else {
            setResult(`Seu IMC é de ${resultImc}. Cuidado! você está com obesidade Grau III`)
        }

        setShowTable(true)
    }

    return(
        <>
        <div className={styles.body}>
            <header className={styles.header}>
            <h1 className={styles.header__title}>Cálculo de IMC</h1>
            <form className={styles.header__form}>
                <label className={styles.header__form__label} htmlFor="height">Digite sua altura</label>
                <input className={styles.header__form__input} onChange={returnHeightData} type="number" id="height" required></input>
                <label className={styles.header__form__label} htmlFor="weight">Digite seu peso</label>
                <input className={styles.header__form__input} onChange={returnWeightData} type="number" id="weight" required></input>
                <button className={styles.header__form__btn} onClick={calcImc} type="submit">CALCULAR</button>
            </form>
            <p className={styles.header__result}>
                {result}
            </p>
            </header>
            
            <div className={styles.container}>
                <h2 className={styles.container__title}>Tabela índice de Massa Corporal</h2>
                <table className={showTable ? styles['container__table--show'] : styles['container__table--hide']}>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Classificação</th>
                            <th>Obesidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Menor que 18,5</td>
                            <td>Magreza</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Entre 18,5 e 24,9</td>
                            <td>Normal</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Entre 25,0 e 29,9</td>
                            <td>Sobrepeso</td>
                            <td>I</td>
                        </tr>
                        <tr>
                            <td>Entre 30,0 e 39,9</td>
                            <td>Obesidade</td>
                            <td>II</td>
                        </tr>
                        <tr>
                            <td>Maior que 40,0</td>
                            <td>Obesidade Grave</td>
                            <td>III</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <footer>
            <p>&copy; Lara Goulart - Todos os direitos reservados - 2026</p>
        </footer>
        </>
    )
}

export default Form