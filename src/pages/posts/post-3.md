---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Types of relationships between classes in C#'
pubDate: 2022-10-21
description: 'Types of relationships between classes in C#'
author: 'Israel Chidera'
image:
    url: '/2.png'
    alt: 'The full Astro logo.'
tags: "tech"
pageTitle: "Types of relationships between classes in C#"
---

The idea behind inheritance in object-oriented programming is to build classes that interact in various ways with one another to ensure code reusability. According to Andrew Troelsen and Phil Japikse, code reuse comes in two flavors: inheritance (the “is-a” relationship) and the containment/delegation model (the “has-a” relationship).

## “is-a” relationships
The “is-a” relationship is also called the classical is-a relationship. This relationship exists when one class is a subspecies of another class. According to Andrew Troelsen and Phil Japikse, the basic idea behind classical inheritance is that new classes can be created using existing classes as a starting point. To demonstrate this kind of relationship, we will create a class named Car that models some basic details of a proper vehicle.

```cs
// A simple base class.
class Car
{
public readonly int MaxSpeed;
private int _currSpeed;

public Car(int max)
{
  MaxSpeed = max;
}

public Car()
{
  MaxSpeed = 55;
}

public int Speed
{
  get { return _currSpeed; }
  set
  {
  _currSpeed = value;
  if (_currSpeed > MaxSpeed)
    {
      _currSpeed = MaxSpeed;
    }
  }
 }
}
```

The class Car has a public Speed property that allows you to set the value of the speed.

To establish an “is-a” relationship, we will create a Minivan class that basically has all the details of the Car class.

```cs
// MiniVan "is-a" Car.
class MiniVan : Car
{
}
```

The above syntax shows that the MiniVan “is-a” kind of Car. MiniVan objects now have access to each public member defined within the Car class. The Car class that was used as the basis for the new class (MiniVaniVan) is termed a base class, superclass, or parent class, while the MiniVan class is usually called the derived or child class.

## “has-a” relationships
The “has-a” relationship (also known as the containment/delegation model or aggregation). A class that has a “has-a” relationship with another class contains one or more objects from the other class. To understand the “has-a” type relationship, we will create an Employee class that “has-a” BenefitPackage class.

```cs
class BenefitPackage
{
// Assume we have other members that represent
// dental/health benefits, and so on.
public double ComputePayDeduction()
{
return 125.0;
}
}
```

The code below shows that the Employee class now has the BenefitPackage class.

```cs
// Employees now have benefits.
partial class Employee
{
// Contain a BenefitPackage object.
protected BenefitPackage EmpBenefits = new BenefitPackage();
…
}
```

## Conclusion


Code source: (Andrew Troelsen and Phil Japikse 2022).

## Reference
A. Troelsen and P. Japikse, Pro C# 10 with .NET 6, https://doi.org/10.1007/978-1-4842-7869-7_6