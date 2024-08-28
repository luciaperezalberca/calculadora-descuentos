function calculateDiscount() {
        const courseValue = parseInt(document.getElementById('courseValue').value);
        const paymentMethod = document.getElementById('paymentMethod').value;
        const isStudent = document.getElementById('isStudent').value === 'si';
        const numCourses = parseInt(document.getElementById('numCourses').value);
        const numColleagues = parseInt(document.getElementById('numColleagues').value);
        const hasJob = document.getElementById('hasJob').value === 'si';
    
        let baseDiscount = 0;
        let additionalDiscountQuantity = 0;
        let colleagueDiscount = 0;
        let totalValue = 0;
        let courseDetails = '';
    
        // Calcular descuento por medio de pago
        if (paymentMethod === 'transferencia') {
            baseDiscount = !hasJob ? 50 : 25; 
        } else if (paymentMethod === 'tarjeta' && !hasJob) {
            baseDiscount = 25;
        }
    
        // Calcular descuento por cantidad de cursos
        if (numCourses === 2 && hasJob) {
            additionalDiscountQuantity = 5;
        } else if (numCourses === 3 && hasJob) {
            additionalDiscountQuantity = 7;
        } else if (numCourses === 4 && hasJob) {
            additionalDiscountQuantity = 10;
        } else if (numCourses >= 5 && hasJob) {
            additionalDiscountQuantity = 25;
        }
    
        // Calcular descuento por colegas
        if (numColleagues === 1 || numColleagues === 2 && hasJob) {
            colleagueDiscount = 5;
        } else if (numColleagues === 3 || numColleagues === 4 && hasJob) {
            colleagueDiscount = 7;
        } else if (numColleagues >= 5 && hasJob) {
            colleagueDiscount = 10;
        }
    
        // Aplicar descuento a cada curso individualmente
        for (let i = 1; i <= numCourses; i++) {
            let courseDiscount = baseDiscount + additionalDiscountQuantity + colleagueDiscount;
            if (isStudent && hasJob) {
                courseDiscount += 15;
            }
            const courseValueWithDiscount = parseInt(courseValue * (1 - courseDiscount / 100));
            totalValue += courseValueWithDiscount;
            courseDetails += `<p>Curso ${i}: Descuento aplicado ${courseDiscount}%, Valor con descuento: $${parseInt(courseValueWithDiscount.toFixed(2))}</p>`;
        }
    
        // Mostrar el resultado
        document.getElementById('result').innerHTML = `El valor total para ${numCourses} curso(s) es: $${parseInt(totalValue.toFixed(2))}`;
        document.getElementById('courseDetails').innerHTML = courseDetails;
    }
      
     