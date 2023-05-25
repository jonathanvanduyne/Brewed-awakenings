import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}" data-name="${employee.name}" data-email="${employee.email}" data-hourlyrate="${employee.hourlyRate}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "employee") {

            let selectedEmployee = ""
            let counter = 0

            const orders = getOrders()
            for (const employee of employees) {
                if (employee.id === parseInt(itemClicked.dataset.id)) {
                    selectedEmployee = employee
                }
            }
            for (const order of orders) {
                if (selectedEmployee.id === order.employeeId) {
                    counter ++
                }
            }
            return window.alert(`${selectedEmployee.name} sold ${counter} products.`)
        }
    }
)
