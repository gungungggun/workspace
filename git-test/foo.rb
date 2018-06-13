def finalize(values)
    values.each do |v|
        v.prepare
    end

    values.each do |v|
        v.finalize
    end
end
