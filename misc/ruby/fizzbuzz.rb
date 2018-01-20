input = ARGV[0]

def div_by(number, divisor)
  if number.to_i % divisor == 0
    return true
  end
end

def check_fizzinass(number)
  puts "fizzbuzz" if div_by(number, 15)
  puts "fizz" if div_by(number, 3)
  puts "buzz" if div_by(number, 5)
  puts "#{number} :("
end

check_fizzinass(input)
