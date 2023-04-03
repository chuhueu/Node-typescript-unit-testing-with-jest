import { toUpperCase, getStringInfo, StringUtils } from "../app/Utils"

describe('Utils test suite', () => {
    
    describe.only('StringUtils tests', () => {
        let sut: StringUtils;

        beforeEach(() => {
            sut = new StringUtils();
        })

        afterEach(() => {
            // clearing mocks
        })
        it('should return correct upperCase', () => {
            const actual = sut.toUpperCase('abc');
            expect(actual).toBe('ABC');
        })

        it.only('Should throw error on invalid argument', () => {
            try {
                sut.toUpperCase('');
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid argument!');
            }
        })
    })

    describe('ToUpperCase examples', () => {
        it.each([
            {input: 'abc', expected: 'ABC'},
            {input: 'My-String', expected: 'MY-STRING'},
            {input: 'def', expected: 'DEF'}
        ])('$input toUpperCase should be $expected', ({input, expected}) => {
            const actual = toUpperCase(input);
            expect(actual).toBe(expected)
        })
    })

    describe('getStringInfo arg My-String should', () => {
        // toEqual và toBe đều sử dụng để so sánh giá trị giữa kết quả kiểm tra và giá trị mong đợi
        // toBe: so sánh chính xác giá trị giữa kết quả và giá trị mong đợi, bao gồm cả kiểu dữ liệu của chúng. Nếu hai giá trị không giống nhau về kiểu dữ liệu, thì kiểm tra sẽ không được coi là đúng
        // toEqual: so sánh giá trị giữa kết quả và giá trị mong đợi, bao gồm cả giá trị và kiểu dữ liệu của chúng
        // Tóm lại, toEqual được sử dụng để so sánh giá trị giữa kết quả và giá trị mong đợi với đầy đủ thông tin kiểu dữ liệu, trong khi toBe chỉ so sánh giá trị và kiểu dữ liệu của kết quả và giá trị mong đợi.
        test('return right length', () => {
            const actual = getStringInfo('My-String');
            expect(actual.characters).toHaveLength(9);
        });
        test('return right lower case', () => {
            const actual = getStringInfo('My-String');
            expect(actual.lowerCase).toBe('my-string');
        });
        test('return right upper case', () => {
            const actual = getStringInfo('My-String');
            expect(actual.upperCase).toBe('MY-STRING');
        });
        test('return right characters', () => {
            const actual = getStringInfo('My-String');
            expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
            // toContain: được sử dụng để kiểm tra xem một mảng hoặc một chuỗi có chứa giá trị mong đợi hay không
            expect(actual.characters).toContain<string>('M');
            expect(actual.characters).toEqual(
                expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
            )
        });
        test('return defined extra info', () => {
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toBeDefined();
        });
        test('return right extra info', () => {
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toEqual({});
        });
    })
})