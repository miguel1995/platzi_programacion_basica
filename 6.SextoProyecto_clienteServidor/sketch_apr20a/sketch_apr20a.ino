int amarillo = 13;
int milisegundos = 500;


void setup() {
  // put your setup code here, to run once:
  pinMode(amarillo, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(amarillo, HIGH);
  delay(milisegundos);
  digitalWrite(amarillo, LOW);
  delay(milisegundos);
  
}
