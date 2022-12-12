import Division from '../../components/Division'

test('Comprueba que la division funcione', () => {
    expect(Division({num1:'64', num2:'4'})).toBe( 16 )
})