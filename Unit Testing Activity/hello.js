function hello(name) {
  if (name == "") {
    return "";
  }

  else if (name == name.toUpperCase()) {
    return "HELLO " + name + "!";
  }

  else {
    return "Hello, " + name;
  }
}
