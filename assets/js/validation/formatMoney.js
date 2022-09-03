const args = {
    prefix: 'R$',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
}

const input = document.querySelectorAll('[data-price]')
input = SimpleMaskMoney.setMask('[data-price]', args)
input.formatToNumber()