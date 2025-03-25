def main():
    personas = []
    while input("¿Desea ingresar una persona? (s/n): ").lower() == 's':
        nombre = input("Ingrese el nombre: ")
        apellido = input("Ingrese el apellido: ")
        dni = input("Ingrese el DNI: ")
        # Se solicitan los teléfonos separados por coma
        telefonos = [tel.strip() for tel in input("Ingrese los teléfonos separados por coma: ").split(',')]
        personas.append([nombre, apellido, dni, telefonos])
    
    print("\nDatos ingresados:")
    for persona in personas:
        print(persona)

if __name__ == "__main__":
    main()