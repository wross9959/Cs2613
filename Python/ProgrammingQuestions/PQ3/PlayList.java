
/*
    @author will ross 3734692
 */
public class PlayList {

    private PlayListNode first;
    private PlayListNode last;
    public int size;

    public class PlayListNode{
        private Song data;
        private PlayListNode next;
        private PlayListNode prev;

        public PlayListNode(Song data){

            this.data = data;
        }
    }
    public void Playlist(){
        first = null;
        last = null;
        size = 0;
    }

    public int getNumSongs(){

        return size;
    }



    public void add(Song song){
        PlayListNode newNode = new PlayListNode(song);

        if(size == 0){
            first = newNode;
            last = newNode;
        }
        else{
            PlayListNode current = first;
            while(current != null && current.data.compareTo(song) > 0){
                current = current.next;
            }
            if(current == null){
                last.next = newNode;
                newNode.prev = last;
                last = newNode;
            }
            else if (current.prev == null){
                newNode.next = current;
                current.prev = newNode;
                first = newNode;
            }
            else{
                newNode.next = current;
                newNode.prev = current.prev;
                current.prev.next = newNode;
                current.prev = newNode;
            }

        }
        size++;
    }

    public void remove(Song song) throws Exception{
        PlayListNode current = first;
        while (current != null) {

            if (current.data.equals(song)) {

                if (current == first) {

                    first = current.next;
                    if (first != null) {
                        first.prev = null;
                    } else {

                        last = null;
                    }
                } else if (current == last) {

                    last = current.prev;
                    last.next = null;
                } else {

                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                size--;
                return;
            }

            current = current.next;
        }

        throw new Exception();


    }

    public Song[] getReversedList(){
        int actSize = this.getNumSongs();
        Song[] songArray = new Song[actSize];
        PlayListNode current = last;

        for(int i = 0; i < actSize; i++){
            songArray[i] = current.data;
            current = current.prev;
        }
        return songArray;
    }

    public void print(){
        PlayListNode current = first;
        System.out.println("PlayList: ");
        while(current != null){
            System.out.println(current.data.toString());
            current = current.next;
        }
    }



}
