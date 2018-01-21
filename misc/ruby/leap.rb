def solution_one(year)
  year = year.to_i
  if year % 400 == 0
    puts "yes! #{year} is a leap year."
  elsif year % 4 == 0
    if year % 100 != 0
      puts "yes! #{year} is a leap year."
    else
      puts "nope, #{year} is not a leap year."
    end
  else
    puts "nope, #{year} is not a leap year."
  end
end

def solution_two(year)
  year = year.to_i
  if year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
    puts "yes! #{year} is a leap year!"
  else
    puts "nope, #{year} is not a leap year."
  end
end

input = ARGV[0]
solution_one(input)
solution_two(input)
