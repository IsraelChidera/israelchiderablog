---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'HOW GARBAGE COLLECTORS OPERATE IN C#'
pubDate: 2022-11-14
description: 'HOW GARBAGE COLLECTORS OPERATE IN C#'
author: 'Israel Chidera'
image:
    url: '/3.png'
    alt: 'The full Astro logo.'
tags: "tech"
pageTitle: "HOW GARBAGE COLLECTORS OPERATE IN C#"
---

Apart from executing the code, the Common Language Runtime performs many other activities, like garbage collection. According to the official .NET docs[https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals], the garbage collector (GC) serves as an automatic memory manager and occurs when one of the following conditions is true:

- The system has low physical memory. The memory size is detected by either the low memory notification from the operating system or low memory as indicated by the host.
- The memory that’s used by allocated objects on the managed heap surpasses an acceptable threshold. This threshold is continuously adjusted as the process runs.
- The GC.Collect method is called. In almost all cases, you don’t have to call this method because the garbage collector runs continuously. This method is primarily used for unique situations and testing.

In this article, we will describe how garbage collectors operate in C#.

## What is a garbage collector?
Garbage collection is a feature automatically provided by the CLR. It helps to clean up unused managed objects. When your.NET application runs, it generates a large number of objects, of which only a subset is used. In a bid to clean up the unused managed objects, they reclaim the memory. The garbage collector is therefore a background thread that runs continuously and checks for unused managed objects.

## Managed heaps
The garbage collector allocates and frees memory for you on the managed heap. The garbage collector has an engine that is known as the optimization engine.

After the CLR initializes the garbage collector, it allocates a segment of memory to store and manage objects. This memory is called the managed heap, as opposed to a native heap in the operating system. There’s a managed heap for each managed process. All threads in the process allocate memory for objects on the same heap.

According to the documentation, to reserve memory, the garbage collector calls the Windows VirtualAlloc function and reserves one segment of memory at a time for managed applications. The garbage collector also reserves segments as needed and releases segments back to the operating system (after clearing them of any objects) by calling the Windows VirtualFree[https://learn.microsoft.com/en-us/windows/desktop/api/memoryapi/nf-memoryapi-virtualfree] function. The fewer objects allocated on the heap, the less work the garbage collector has to do.

When a garbage collection is triggered, the garbage collector reclaims the memory that’s occupied by dead objects. The reclaiming process compacts live objects so that they’re moved together, and the dead space is removed, thereby making the heap smaller. This process ensures that objects that are allocated together stay together on the managed heap to preserve their locality. The intrusiveness (frequency and duration) of garbage collections is the result of the volume of allocations and the amount of survived memory on the managed heap.

The heap can be considered as the accumulation of two heaps: the large object heap[https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/large-object-heap] and the small object heap. The large object heap contains objects that are 85,000 bytes and larger, which are usually arrays. It’s rare for an instance object to be extra large.

## Heap Generations in Garbage Collection
The managed heaps are divided into three generations.

1. Generation 0
All newly created objects belong to this generation 0 collections unless they are large objects. All objects in this generation are often short-lived. Garbage collection occurs most frequently in this generation as most objects are reclaimed for garbage collection in generation 0 and don’t survive to the next generation.

2. Generation 1
This generation contains short-lived objects. The objects in this generation often serve as a buffer between short-lived objects and long-lived objects. According to the documentation [https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals], After the garbage collector performs a collection of generation 0, it compacts the memory for the reachable objects and promotes them to generation 1. Because objects that survive collections tend to have longer lifetimes, it makes sense to promote them to a higher generation. The garbage collector doesn’t have to reexamine the objects in generations 1 and 2 each time it performs a collection of generation 0. If a collection of generation 0 doesn’t reclaim enough memory for the application to create a new object, the garbage collector can perform a collection of generation 1 and then generation 2. Objects in generation 1 that survive collections are promoted to generation 2

3. Generation 2
This generation contains long-lived objects. If space is occupied by some generation 1 objects that are not released in the next garbage collection run, then these objects get moved to generation 2. The objects in generation 2 are long-lived such as static objects as they remain in the heap memory for the whole process duration.

## Phases during a garbage collection
There are three phases during garbage collection. They include:

- A marking phase where a list of live objects is created.
- A relocating phase that updates the references to the objects that will be compacted.
- A compacting phase that reclaims the space occupied by the dead objects and compacts the surviving objects. The compacting phase moves objects that have survived a garbage collection towards the older end of the segment.

## Conclusion
In conclusion, understanding the intricacies of garbage collection in C# and the role played by the Common Language Runtime (CLR) is crucial for developers aiming to optimize memory management in their .NET applications. The garbage collector, as a core component of the CLR, functions as an automatic memory manager, continuously monitoring and reclaiming memory occupied by unused managed objects.

The managed heap, divided into the large object heap and the small object heap, serves as the foundation for memory allocation and deallocation. The allocation and freeing of memory are orchestrated by the garbage collector's optimization engine, which efficiently reserves and releases memory segments as needed.

I hope the article was helpful.
Happy Coding!