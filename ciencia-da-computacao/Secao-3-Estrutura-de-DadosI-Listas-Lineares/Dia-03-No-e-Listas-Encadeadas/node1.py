class Node:
    def __init__(self, value):
        self.value = value  # 🎲 Dado a ser armazenado
        self.next = None  # 👉 Próximo nó
        self.previous = None  # 👈 Nó anterior

    def __str__(self):
        return f"value={self.value},next={self.next}, previous={self.previous}"


class DoublyLinkedList:

    def __init__(self):
        self.head = None
        self.tail = None
        self.__length = 0

    def __str__(self):
        return f"Doublylen={self.__length}, head={self.head}, tail={self.tail}"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        new_node = Node(value)

        if self.is_empty():
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.previous = new_node
            self.head = new_node

        self.__length += 1

    def insert_last(self, value):
        new_node = Node(value)

        if self.is_empty():
            self.head = new_node
            self.tail = new_node
        else:
            new_node.previous = self.tail
            self.tail.next = new_node
            self.tail = new_node

        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        new_node = Node(value)
        current_node = self.head

        while position > 1:
            current_node = current_node.next
            position -= 1

        new_node.previous = current_node
        new_node.next = current_node.next
        current_node.next.previous = new_node
        current_node.next = new_node

        self.__length += 1

    def remove_first(self):
        if self.is_empty():
            return None

        value_to_be_removed = self.head

        if len(self) == 1:
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next
            self.head.previous = None

        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def remove_last(self):
        if self.is_empty():
            return None

        value_to_be_removed = self.tail

        if len(self) == 1:
            self.head = None
            self.tail = None
        else:
            self.tail = self.tail.previous
            self.tail.next = None

        value_to_be_removed.previous = None
        self.__length -= 1

        return value_to_be_removed

    def remove_at(self, position):
        if position < 1 or self.is_empty():
            return None
        if position >= len(self):
            return self.remove_last()

        current_node = self.head

        while position > 1:
            current_node = current_node.next
            position -= 1

        value_to_be_removed = current_node.next
        current_node.next = value_to_be_removed.next
        value_to_be_removed.next.previous = current_node
        value_to_be_removed.previous = None
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        if position < 0 or position >= len(self):
            return None

        current_node = self.head

        while position > 0:
            current_node = current_node.next
            position -= 1

        return current_node

    def is_empty(self):
        return self.__length == 0

     def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


    def delete_duplicates(linked_list):
        list_with_unique_elements = DoublyLinkedList()

        while linked_list:
            current_node = linked_list.remove_first()
            if linked_list.index_of(current_node.value) == -1:
                list_with_unique_elements.insert_last(current_node.value)

        return list_with_unique_elements