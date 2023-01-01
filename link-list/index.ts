class LinkListNode {
  data: any;
  next: LinkListNode;
  constructor (nodeOptions) {
    this.data = nodeOptions.data
    this.next = nodeOptions.next || null
  }
}

class LinkList {
  header: LinkListNode | null = null
  length: number = 0

  add (node) {
    let currentNode = this.header
    if (this.header === null) {
      this.header = node
      this.length += 1
      return
    }
    while (currentNode?.next !== null) {
      currentNode = currentNode?.next as LinkListNode | null
    }
    currentNode.next = node
    this.length += 1
  }

  find (node) {
    let currentNode = this.header
    while (currentNode?.data !== node?.data) {
      currentNode = currentNode?.next as LinkListNode | null
    }

    return currentNode
  }

  findPre (node) {
    let currentNode = this.header
    while (currentNode?.next?.data !== node?.data) {
      currentNode = currentNode?.next as LinkListNode | null
    }
    return currentNode
  }

  insert (node, targetNode) {
    const currentNode = this.find(targetNode)
    if (currentNode) {
      node.next = currentNode?.next
      currentNode.next = node
      this.length += 1
    }
  }

  remove (node) {
    const preNode = this.findPre(node)
    if (preNode) {
      preNode.next = node.next
    }
  }

  clear () {
    this.length = 0
    this.header = null
  }
}