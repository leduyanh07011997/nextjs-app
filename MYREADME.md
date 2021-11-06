# Tạo tài liệu PDF từ Markdown 


1. Ai có thể viết kiểu này.
2. Tại sao lại viết bằng Markdown?
3. Những tình huống sử dụng.
4. Làm sao để tạo được file PDF từ Markdown


![Markdown image](./images/1200px-Markdown-mark.svg.png)

<div style="page-break-after: always;"></div>

## 1. Ai có thể viết kiểu này
- Ai cũng được, miễn chịu học cú pháp markdown 
- Nhưng hiện tại, mình nghĩ chỉ có dev hay sử dụng
![Developer image](images/developer-la-gi.jpg)


## 2. Tạo sao lại viết bằng Markdown?

- Cú pháp đơn giản, dễ sử dụng (có extension hỗ trợ nhắc cú pháp)
- Tự động fotmat document
- Hỗ trợ nhiều dạng dữ liệu: links, images, table, mermaid diagram,...
- có thể xuất ra web (HTML) hoặc pdf để dễ dàng chia sẽ.
  
## 3. Những tình huống sử dụng.

- Dev viết tài liệt cho dự án.
    
    - File READMER.md
    - Mô tả tính năng, workflow.

- Viết tài liệu đơn giản để chia sẽ cho người khác.
- Làm slide bài giảng.
- Blog posts
- static side.
- ...

## 4. Làm sao để tạo file PDF từ Markdown.

4.1 Cài các extension cho VSCode

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one): Hỗ trợ gõ tắt cú pháp, fomat, preview Markdown.
- [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf): Export trực tiếp Markdown ra file PDF.
- [Markdown Preview Mermaid](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid): Preview mermaid diagrams.

4.2 Tìm hiểu về cú pháp của Markdown

> Link tham khảo: https://www.markdownguide.org/basic-syntax/#headings

4.3 Xuất file Markdown ra file PDF.

```
1. Đảm bảo đã cài extension Markdown PDF:

2. Mở một file Markdown(*.md) mà bạn muốn 
export thành file PDF.

3. Click chuột phải vào bất cứ chỗ nào trong file Markdown.

4. Một menu hiển thị lên, chọn "Markdown PDF: Export(pdf)"

5. Done! Đợi một chút bạn sẽ thấy một file pdf cùng tên với markdown được tạo ra. Quá dễ dàng đúng không?

```

![Expample convert from mardown file to PDF file](./images/Screenshot%20from%202021-11-06%2010-36-26.png)


