import Suma from '../../components/Suma'

test('suma apropiadamente los props de suma', () => {
    expect(Suma({num1:'100', num2:'5'})).toBe( 105 )
})