import Multiplicacion from '../../components/Multiplicacion'

test('Comprueba la efectividad de la multiplicacion', () => {
    expect(Multiplicacion({num1:'24', num2:'8'})).toBe( 192 )
})