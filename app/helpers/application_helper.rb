module ApplicationHelper
  class String   
    def vowels     
      scan(/[aeiou]/i)   
    end   
    def consonants     
      scan(/[^aeiou]/i)   
    end 
  end
end
