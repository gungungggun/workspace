class Java{
	public static void main(String[] args){

        long start = System.currentTimeMillis();
        int count = 0;
        int x;

        for (int i = 2; i <= 10000; i++) {
            x = i;
            while (x != 1) {
                if (x % 2 == 0) {
                    x = a(x);
                } else {
                    x = b(x);
                }
                count++;
            }
        }

        long end = System.currentTimeMillis();
        System.out.println((end - start)  + "ms");
        System.out.println("count:" + count);

	}

    private static int a (int n) {
        return n / 2;
    }

    private static int b (int n) {
        return n * 3 + 1;
    }
}
