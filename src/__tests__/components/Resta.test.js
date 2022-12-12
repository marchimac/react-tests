import Resta from '../../components/Resta'

test('Comprobacion de la eficacia de la resta', () => {
    expect(Resta({num1:'27', num2:'9'})).toBe( 18 )
})